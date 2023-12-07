import { AddOrganizationModal, EditEnrolleeModal, InsurerRow, Nav, OrganizationRow, OrganizationUserRow, Plan, SmallButton, SmatNav } from "@/components";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon, SortDescendingIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import icon from "@/assets/insurer-icon.png";
import Image from "next/image";
import { useRouter } from "next/router";
import InsurerService from "@/services/InsurerService";
import { withProtected } from "@/hooks/routes";


function Organization({ auth }) {
    const router = useRouter();
    const { user } = auth;
    const { query } = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const [org, setOrg] = useState(null);
    const [enrollee, setEnrollee] = useState(null);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        fetchInsurer(query.id)
    }, [query])

    const fetchInsurer = async (query) => {
        setDisabled(true);
        try {
            const response = await InsurerService.fetchOrganization(query);
            console.log(response);
            setOrg(response.data);
            setDisabled(false);
        } catch (error) {
            console.log(error);
            setDisabled(false);
        }
    }

    const openEnrollee = (enrollee) => {
        setEnrollee(enrollee);
        setOpenModal(true)
    }

;    return (
        <>
            <main className="bg-[#EDF0F8] h-screen">
                <EditEnrolleeModal visible={openModal} closeModal={() => setOpenModal(false)} enrollee={enrollee}  />
                <SmatNav name={ user?.contact_person_first_name } />
                <section className="m-[32px]">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex gap-2 items-center">
                            <ChevronLeftIcon className="h-5 w-5 text-[#051438]" />
                            <h5 className="text-[#051438] text-[18px] font-semibold">{ org?.insurer?.organization_name }</h5>
                        </div>

                        <div className="bg-[#DFE2E9] py-[8px] px-[16px] flex gap-7 justify-between items-center rounded-[10px]">
                            <div className="flex flex-col  items-center">
                                <span className="text-[#051438] text-[16px] font-semibold">{ org?.staff_members.length}</span>
                                <span className="text-[#677597] text-[14px] font-semibold">Total staff enrolled</span>
                            </div>
                            <div className="flex flex-col  items-center">
                                <span className="text-[#051438] text-[16px] font-semibold">{ org?.incomplete_setup }</span>
                                <span className="text-[#677597] text-[14px] font-semibold">Enrollees with info completed</span>
                            </div>

                            <div className="flex flex-col  items-center">
                                <span className="text-[#051438] text-[16px] font-semibold">{ org?.total_dependents }</span>
                                <span className="text-[#677597] text-[14px] font-semibold">Total dependants</span>
                            </div>
                        </div>


                        <div className="flex items-center gap-8">
                            <div className="flex gap-3 items-center bg-white border border-[#DFE2E9] rounded-[10px]  pr-[20px]">
                                <input type="text" id="search" name="search" className="w-full py-[10px] pl-[20px] rounded-l-[10px]" placeholder="Search list" />
                                <SearchIcon className="h-5 w-5" />
                            </div>
                            <SmallButton text="Enrolment actions" onClick={() => setOpenModal(true)} />
                        </div>
                    </div>


                    {/* <div className="h-[582px] flex justify-center items-center overflow-scroll">
                        <div className="bg-white rounded-[10px] border border-[#DFE2E9] p-[16px] flex flex-col justify-center items-center h-[360px] w-[640px]">
                            <Image src={icon} width="120" height="" alt="" className="mb-8" />
                            <p className="text-[#677597] text-[16px] mb-2">No data recorded</p>
                        </div>
                    </div> */}

                    <div className="h-[582px]">
                        <div>
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex gap-7 items-center">
                                    <div className="flex gap-2 items-center">
                                        <span className="text-[#051438] font-semibold text-[16px]">All job titles</span>
                                        <ChevronDownIcon className="h-5 w-5 text-[#0B0C7D]" />
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className="text-[#051438] font-semibold text-[16px]">All providers</span>
                                        <ChevronDownIcon className="h-5 w-5 text-[#0B0C7D]" />
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className="text-[#051438] font-semibold text-[16px]">All plans</span>
                                        <ChevronDownIcon className="h-5 w-5 text-[#0B0C7D]" />
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <SortDescendingIcon className="h-5 w-5 text-[#0B0C7D]" />
                                        <span className="text-[#0B0C7D] font-semibold text-[16px]">Sort by</span>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-center">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-[#677597] text-[16px] font-medium">
                                            <span>1 - { org?.staff_members.length}</span>
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
                                        Enrollee information
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Contact information
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Job information
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Preferred provider
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Plan information
                                    </li>
                                </ul>

                                { !disabled && org?.staff_members?.length > 0 &&
                                <div className="">
                                    <OrganizationUserRow enrollees={ org?.staff_members } openPlan={openEnrollee} />
                                </div>}


                            </div>

                        </div>
                    </div>

                </section>
            
            </main>
        </>
    );
}

export default withProtected(Organization);