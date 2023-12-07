import { AccountForm, AddOrganizationModal, Dependant, EditEnrolleeModal, EnrolleeInfo, InsuranceSettingForm, InsurerRow, Nav, OrganizationRow, OrganizationUserRow, SmallButton, SmallButtonWhite, SmatNav, StaffRow } from "@/components";
import { ChevronDoubleRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon, SortDescendingIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import icon from "@/assets/insurer-icon.png";
import Image from "next/image";


function Settings() {
    const [openModal, setOpenModel] = useState(false);

;    return (
        <>
            <main className="bg-[#EDF0F8]">
                <EditEnrolleeModal visible={openModal} closeModal={() => setOpenModel(false)} />
                <SmatNav name="Yemisi" />
                <section className="p-[32px]">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex gap-2 items-center">
                            <ChevronLeftIcon className="h-5 w-5 text-[#051438]" />
                            <h5 className="text-[#677597] text-[16px] font-semibold">Settings</h5>
                        </div>

                        <div className="border-b-[2px] border-[#DFE2E9] pb-[3px] flex gap-1 items-center w-[476px] justify-between relative">
                            <button className="text-[16px] font-semibold text-center text-[#0B0C7D]">
                                <span>Account</span>
                                <span className="h-[2px] w-10 flex bg-[#0B0C7D] absolute -bottom-[1px] left-3"></span>
                            </button>
                            <button className="text-[16px] font-semibold text-center text-[#7A90C2]">
                                <span>Staff</span>
                                <span className="h-[2px] w-10 flex bg-[#0B0C7D] absolute -bottom-[1px] left-3"></span>
                            </button>
                            <button className="text-[16px] font-semibold text-center text-[#7A90C2] pb-2 border-b-2 border-[#0B0C7D]">Plans</button>
                            <button className="text-[16px] font-semibold text-center text-[#7A90C2]">Providers</button>
                            <button className="text-[16px] font-semibold text-center text-[#7A90C2]">Pre-existing conditions</button>
                        </div>

                        <SmallButton text="Add Staff" />
                    </div>

                    <div className="flex justify-between items-center mb-5">
                        <div className="flex">
                            <span className="text-[#051438] text-[16px] font-semibold">Staff</span>
                        </div>

                        <div className="flex gap-6 items-center">
                            <div className="flex gap-2 items-center">
                                <p className="text-[#677597] text-[16px] font-medium">
                                    <span>1 - 10</span>
                                </p>
                                <span className="text-[#051438] text-[16px] font-medium">of</span>
                                <span className="text-[#677597] text-[16px] font-medium">30</span>
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

                    {/* <div className="h-[582px] flex justify-center items-center overflow-scroll">
                        <div className="bg-white rounded-[10px] border border-[#DFE2E9] p-[16px] flex flex-col justify-center items-center h-[360px] w-[640px]">
                            <Image src={icon} width="120" height="" alt="" className="mb-8" />
                            <p className="text-[#677597] text-[16px] mb-2">No data recorded</p>
                            <p className="text-[#051438] text-[16px] font-medium">Click on the Add staff button to get started</p>
                        </div>
                    </div> */}

                    {/* <div className="h-[582px] flex justify-center items-center overflow-scroll">
                        <div className="bg-white rounded-[10px] border border-[#DFE2E9] p-[16px] flex flex-col justify-center items-center h-[360px] w-[640px]">
                            <Image src={icon} width="120" height="" alt="" className="mb-8" />
                            <p className="text-[#677597] text-[16px] mb-2">No data recorded</p>
                            <p className="text-[#051438] text-[16px] font-medium">Click on the Add staff button to get started</p>
                        </div>
                    </div> */}

                    <div className="h-[582px]">
                        <ul className="flex justify-between">
                            <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                            Enrollee information
                            </li>
                            <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                Contact information
                            </li>
                            <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                <span class="sr-only">Edit</span>
                            </li>
                        </ul>

                        <div className="">
                            <StaffRow />
                            <StaffRow />
                            <StaffRow />
                        </div>


                    </div>

                </section>
            
            </main>
        </>
    );
}

export default Settings;