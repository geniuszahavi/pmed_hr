import { ChevronRightIcon, InformationCircleIcon, UserIcon } from "@heroicons/react/outline";


function EnrolleeRow({ enrollees, openPlan }) {
    return (
        <>
            { enrollees.map((enrollee, index) => <button key={index} className="mb-3 rounded-[10px] px-[16px] text-left bg-white w-full flex justify-between items-start pt-2 pb-2" onClick={() => openPlan(enrollee)}>
                <div className="flex gap-2">
                    <span className="bg-[#A6AFC2] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                        <UserIcon className="h-5 w-5 text-white" />
                    </span>
                    <div className="flex flex-col gap-1">
                        <span className="text-[#051438] text-[16px] font-medium">{ enrollee?.first_name } { enrollee?.last_name }</span>
                        <div className="flex gap-2">
                            <p className="flex gap-1 py-0">
                                <span className="text-[#677597] text-[14px] font-medium">18y</span>
                            </p>

                            <span className="flex w-[1px] bg-[#DFE2E9]"></span>

                            <p className="flex gap-1 py-0">
                                <span className="text-[#677597] text-[14px] font-medium capitalize">{ enrollee?.gender }</span>
                            </p>

                            <span className="flex w-[1px] bg-[#DFE2E9]"></span>

                            <span className="bg-[#E2F8EB] py-[2px] px-[4px] rounded-[5px] text-[#27AE60] text-[12px]">ID card generated</span>
                        </div>
                        <div className="flex gap-2">
                            <p className="flex gap-1 py-0">
                                <span className="text-[#677597] text-[14px] font-medium">Insurance ID:</span>
                                <span className="text-[#051438] text-[14px] font-medium">{ enrollee?.insurance_id }</span>
                            </p>

                            <span className="flex w-[1px] bg-[#DFE2E9]"></span>

                            <p className="flex gap-1 py-0">
                                <span className="text-[#677597] text-[14px] font-medium">Dependants:</span>
                                <span className="text-[#051438] text-[14px] font-medium">2</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="text-[#051438] text-[16px] font-medium">{ enrollee?.email }</span>
                    <span className="text-[14px] font-medium text-[#677597]">{ enrollee?.phone_number }</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-[#051438] text-[16px] font-medium">{ enrollee?.job_title }</span>
                    <span className="text-[14px] font-medium text-[#677597]">{ enrollee?.level }</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-[#051438] text-[16px] font-medium">Continental Lagoon Hospitals</span>
                    <span className="text-[14px] font-medium text-[#677597]">Lekki, Lagos</span>
                </div>

                <button className="flex gap-8 items-center" type="button" onClick={openPlan}>
                    <div className="flex flex-col gap-2 items-start">
                        <p className="flex justify-between items-center gap-12">
                            <span className="text-[#051438] text-[16px] font-medium">Bronze</span>
                            <InformationCircleIcon className="h-3 w-3" />
                        </p>
                        <span className="text-[#051438] text-[16px] font-medium">₦52,000</span>
                    </div>
                    <ChevronRightIcon className="h4 w-4" />
                </button>
            </button>)}
        </>
        
    );
}

export default EnrolleeRow;