import { AddOrganizationModal, Dependant, EditEnrolleeModal, EnrolleeInfo, InsurerRow, Nav, OrganizationRow, OrganizationUserRow, SmallButton, SmallButtonWhite, SmatNav } from "@/components";
import { ChevronDoubleRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon, SortDescendingIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import icon from "@/assets/insurer-icon.png";
import Image from "next/image";
import { withProtected } from "@/hooks/insurerRoutes";


function OrganizationStaff() {
    const [openModal, setOpenModel] = useState(false);

;    return (
        <>
            <main className="bg-[#EDF0F8] ">
                <EditEnrolleeModal visible={openModal} closeModal={() => setOpenModel(false)} />
                <SmatNav name="Yemisi" />
                <section className="p-[32px] ">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex gap-2 items-center">
                            <ChevronLeftIcon className="h-5 w-5 text-[#051438]" />
                            <h5 className="text-[#677597] text-[16px] font-semibold">Shell Nigeria Plc</h5>

                            <ChevronDoubleRightIcon className="h-5 w-5 text-[#051438]" />

                            <h5 className="text-[#051438] text-[16px] font-semibold">Aokpopoidon Endurance</h5>
                        </div>



                        <div className="flex items-center gap-8">
                            <SmallButtonWhite text="Physical ID card" onClick={() => setOpenModel(true)} />
                            <SmallButton text="Edit enrollee info" onClick={() => setOpenModel(true)} />
                        </div>
                    </div>


                    {/* <div className="h-[582px] flex justify-center items-center overflow-scroll">
                        <div className="bg-white rounded-[10px] border border-[#DFE2E9] p-[16px] flex flex-col justify-center items-center h-[360px] w-[640px]">
                            <Image src={icon} width="120" height="" alt="" className="mb-8" />
                            <p className="text-[#677597] text-[16px] mb-2">No data recorded</p>
                        </div>
                    </div> */}

                    <div className="bg-white p-[16px] rounded-[10px] mb-5">

                        <div className="w-full flex gap-3 justify-between items-center mb-3">
                            <span className="text-[#A6AFC2] font-bold text-[16px]">Primary enrollee</span>
                            <span className="w-[88%] h-[1px] flex bg-[#DFE2E9]"></span>
                        </div>

                        <div className="grid grid-cols-3">

                            <EnrolleeInfo title="First name" text="Arthur" />

                            <EnrolleeInfo title="Middle name" text="Shawn" />

                            <EnrolleeInfo title="Last name" text="ArtAubreyhur" />

                            <EnrolleeInfo title="Gender" text="Male" />

                            <EnrolleeInfo title="Date of Birth" text="12 Jul 1991" />

                            <EnrolleeInfo title="Phone number" text="07012345678" />

                            <EnrolleeInfo title="Email address" text="mccurley@yahoo.ca" />

                            <EnrolleeInfo title="Nationality" text="Nigerian" />

                            <EnrolleeInfo title="State of origin" text="Kwara" />

                            <EnrolleeInfo title="Address" text="1123, Villa Park, Victoria Island" />

                            <EnrolleeInfo title="Job title" text="Pipeline Engineer" />

                            <EnrolleeInfo title="Level" text="Associate Pipeline Engineer" />

                            <EnrolleeInfo title="Staff ID" text="NV-005689" />

                            <EnrolleeInfo title="Preferred hospital" text="Ivory Specialist Hospital Maternity, Ariaria, Abia" />

                            <EnrolleeInfo title="Plan" text="Bronze" />
                            
                            <EnrolleeInfo title="Pre-existing conditions" text="Lung disease" />

                            <EnrolleeInfo title="Insurance ID" text="ATL126575553" />

                            <EnrolleeInfo title="Signature" text="Signature" />
                        </div>
                        
                    </div>

                    <div className="bg-white p-[16px] rounded-[10px] w-full">

                        <div className="w-full flex gap-12 items-center mb-2">
                            <span className="text-[#A6AFC2] font-bold text-[16px]">Dependants</span>
                            <div className="flex w-full gap-2 items-center">
                                <p className="flex gap-1">
                                    <span className="text-[14px] font-medium text-[#677597]">Total dependants:</span>
                                    <span className="text-[#051438] text-[14px] font-medium">2</span>
                                </p>
                                <span className="w-[88%] h-[1px] flex bg-[#DFE2E9]"></span>
                            </div>
                        </div>

                        <Dependant name="Arthur Tommy Shelby" />

                        <Dependant name="Valerie N&apos;kom Shelby" />
                        
                    </div>
                </section>
            
            </main>
        </>
    );
}

export default withProtected(OrganizationStaff);