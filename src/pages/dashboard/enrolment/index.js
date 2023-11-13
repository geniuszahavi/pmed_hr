import { AddOrganizationModal, OrganizationRow, SmallButton, SmatNav, Success } from "@/components";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, SortDescendingIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { withProtected } from "@/hooks/routes";
import InsurerService from "@/services/InsurerService";
import Image from "next/image";
import { useRouter } from "next/navigation";


function Enrolment({ auth }) {
    const router = useRouter();
    const { setUser, user } = auth;
    const [openModal, setOpenModal] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [orgs, setOrgs] = useState(null);

    useEffect(() => {
        listOrgs()
    }, [])

    const listOrgs = async () => {
        setDisabled(true);
        try {
            const response = await InsurerService.listOrganization(JSON.parse(localStorage.getItem("plateaumed_insurer_user")).id);
            console.log(response);
            setOrgs(response.data)
            setDisabled(false);
        } catch (error) {
            setDisabled(false);
            console.log(error);
        }
    }

    const openOrg = async (id) => {
        console.log(id);
        // const response = await InsurerService.fetchOrganization(id);
        // console.log(response);
        router.push(`/dashboard/enrolment/${id}`);
    }

    return (
        <>
            <main className="bg-[#EDF0F8] h-screen">
                <AddOrganizationModal visible={openModal} closeModal={() => setOpenModal(false)} />
                <Success />
                <SmatNav name={user?.contact_person_first_name} />
                <section className="m-[32px]">
                    <div className="flex justify-between items-center mb-8">
                        <h5 className="text-[#051438] text-[18px] font-semibold">Enrolment management</h5>
                        <div className="flex items-center gap-8">
                            <div className="flex gap-3 items-center bg-white border border-[#DFE2E9] rounded-[10px]  pr-[20px]">
                                <input type="text" id="search" name="search" className="w-full py-[10px] pl-[20px] rounded-l-[10px]" placeholder="Search list" />
                                <SearchIcon className="h-5 w-5" />
                            </div>
                            <SmallButton text="Add organization" onClick={() => setOpenModel(true)} />
                        </div>
                    </div>


                    { !disabled && orgs?.length == 0 && <div className="h-[582px] flex justify-center items-center overflow-scroll">
                        <div className="bg-white rounded-[10px] border border-[#DFE2E9] p-[16px] flex flex-col justify-center items-center h-[360px] w-[640px]">
                            <Image src={icon} width="120" height="" alt="" className="mb-8" />
                            <p className="text-[#677597] text-[16px] mb-2">No data recorded</p>
                        </div>
                    </div> }

                    { orgs == null && <div className="h-[550px] flex justify-center items-center">
                        <span class="spinner"></span>
                    </div> }

                    { !disabled && orgs?.length > 0 && <div className="h-[582px]">
                        <div>
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex gap-1 items-center">
                                    <SortDescendingIcon className="h-5 w-5 text-[#0B0C7D]" />
                                </div>

                                <div className="flex gap-6 items-center">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-[#677597] text-[16px] font-medium">
                                            <span>1 - 20</span>
                                        </p>
                                        <span className="text-[#051438] text-[16px] font-medium">of</span>
                                        <span className="text-[#677597] text-[16px] font-medium">200</span>
                                    </div>

                                    <div className="flex gap-3 items-center">
                                        <button className="flex justify-center items-center bg-white disabled:bg-[#E6E8EB] border border-[#DFE2E9] rounded-[4px] h-[32px] w-[32px]" disabled>
                                            <ChevronLeftIcon className="h-4 w-4" />
                                        </button>
                                        <button className="flex justify-center items-center bg-white disabled:bg-[#E6E8EB] border border-[#DFE2E9] rounded-[4px] h-[32px] w-[32px]">
                                            <ChevronRightIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>

                                <ul className="flex justify-between">
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Organization
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Contact person
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Enrollees
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                         Plan information
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        <span className="sr-only">Edit</span>
                                    </li>
                                </ul>

                                <div className="">
                                    <OrganizationRow organizations={orgs} openOrg={openOrg} />
                                </div>


                            </div>

                        </div>
                    </div>}

                </section>
            
            </main>
        </>
    );
}

export default withProtected(Enrolment);