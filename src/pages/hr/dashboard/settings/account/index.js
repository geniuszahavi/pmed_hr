import { AccountForm, AddOrganizationModal, Dependant, EditEnrolleeModal, EnrolleeInfo, InsuranceSettingForm, InsurerRow, Nav, OrganizationRow, OrganizationUserRow, SmallButton, SmallButtonWhite, SmatNav } from "@/components";
import { ChevronDoubleRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon, SortDescendingIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import icon from "@/assets/insurer-icon.png";
import Image from "next/image";


function Settings() {
    const [openModal, setOpenModel] = useState(false);

;    return (
        <>
            <main className="bg-[#EDF0F8] h-screen">
                <EditEnrolleeModal visible={openModal} closeModal={() => setOpenModel(false)} />
                <SmatNav name="Yemisi" />
                <section className="p-[32px] ">
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

                        <div></div>
                    </div>




                    <div className="p-[16px] rounded-[10px] bg-white mb-4">
                        <div className="w-full flex gap-3 justify-between items-center mb-3">
                            <span className="text-[#A6AFC2] font-bold text-16px]">Account information</span>
                            <span className="w-[80%] h-[1px] flex bg-[#DFE2E9]"></span>
                            <SmallButtonWhite text="Edit" />
                        </div>

                        {/* <div className="w-full flex gap-3 justify-between items-center mb-3">
                            <span className="text-[#A6AFC2] font-bold text-16px]">Account information</span>
                            <span className="w-[73%] h-[1px] flex bg-[#DFE2E9]"></span>
                            <div className="flex items-center gap-8">
                                <SmallButton text="Save" />
                                <SmallButtonWhite text="Cancel" />
                            </div>
                        </div> */}

                        <div>
                            {/* <AccountForm /> */}
                            <div className="flex gap-4 mb-4">
                                <span className="bg-[#A6AFC2] text-white rounded-full w-[45px] h-[45px] flex justify-center items-center">S</span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[12px] font-semibold text-[#677597]">Insurer name</span>
                                    <span className="text-[16px] font-medium text-[#051438]">Smathealth HMO</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-[16px] rounded-[10px] bg-white mb-4">
                        <h4 className="text-[16px] font-bold text-[#A6AFC2] mb-2">Contact person(s) information</h4>
                        <div className="pb-3 flex justify-around border-b border-[#DFE2E9] mb-3">
                            <div className="flex flex-col gap-1 w-full">
                                <span className="text-[12px] font-semibold text-[#677597]">Contact person first name</span>
                                <span className="text-[16px] font-medium text-[#051438]">Curley</span>
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <span className="text-[12px] font-semibold text-[#677597]">Contact person last name</span>
                                <span className="text-[16px] font-medium text-[#051438]">Mckatie</span>
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <span className="text-[12px] font-semibold text-[#677597]">Contact person email address</span>
                                <span className="text-[16px] font-medium text-[#051438]">mccurley@yahoo.ca</span>
                            </div>
                        </div>

                        <div className="pb-1 flex justify-around">
                            <div className="flex flex-col gap-1 w-full">
                                <span className="text-[12px] font-semibold text-[#677597]">Contact person first name</span>
                                <span className="text-[16px] font-medium text-[#051438]">Curley</span>
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <span className="text-[12px] font-semibold text-[#677597]">Contact person last name</span>
                                <span className="text-[16px] font-medium text-[#051438]">Mckatie</span>
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <span className="text-[12px] font-semibold text-[#677597]">Contact person email address</span>
                                <span className="text-[16px] font-medium text-[#051438]">mccurley@yahoo.ca</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-[16px] rounded-[10px] bg-white">
                        <div className="w-full flex gap-3 justify-between items-center mb-3">
                            <span className="text-[#A6AFC2] font-bold text-16px]">Insurance ID settings</span>
                            <span className="w-[80%] h-[1px] flex bg-[#DFE2E9]"></span>
                            <SmallButtonWhite text="Modify" />
                        </div>

                        {/* <div className="w-full flex gap-3 justify-between items-center mb-3">
                            <span className="text-[#A6AFC2] font-bold text-16px]">Insurance ID settings</span>
                            <span className="w-[73%] h-[1px] flex bg-[#DFE2E9]"></span>
                            <div className="flex items-center gap-8">
                                <SmallButton text="Save" />
                                <SmallButtonWhite text="Cancel" />
                            </div>
                        </div> */}

                        {/* <InsuranceSettingForm /> */}

                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] font-semibold text-[#677597]">Insurer ID setup & starting point</span>
                            <span className="text-[16px] font-medium text-[#051438]">SMAT0001</span>
                        </div>
                    </div>
                </section>
            
            </main>
        </>
    );
}

export default Settings;