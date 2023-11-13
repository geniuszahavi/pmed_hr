import { ChevronRightIcon } from "@heroicons/react/outline";


function InsurerRow({ insurers, openInsurer }) {
    return (
        <>
            { insurers.map((insurer, index) => <button key={index} className="mb-3 rounded-[10px] px-[16px] bg-white w-full flex justify-between items-start pt-2 pb-2 text-left" onClick={() => openInsurer(insurer.id)}>
            <div className="flex gap-2 items-center">
                <span className="bg-[#A6AFC2] text-white rounded-full w-[28px] h-[28px] flex justify-center items-center">{ insurer?.organization_name.split("")[0] }</span>
                <span className="text-[#051438] text-[16px] font-medium">{ insurer.organization_name }</span>
            </div>

            <div className="flex flex-col">
                <span className="text-[#051438] text-[16px] font-medium">{ insurer.contact_person_first_name } { insurer.contact_person_last_name }</span>
                <span className="text-[14px] font-medium text-[#677597]">{ insurer.contact_person_email}</span>
            </div>

            <div className="flex flex-col">
                <span className="text-[#051438] text-[16px] font-medium">3,000</span>
                <p className="flex gap-1">
                    <span className="text-[14px] font-medium text-[#677597]">Total dependants:</span>
                    <span className="text-[#051438] text-[14px] font-medium">200</span>
                </p>
            </div>

            <div className="flex gap-8">
                <span className="text-[#051438] text-[16px] font-medium">Bronze, Silver, Gold, Diamond Xtra, Platinum</span>
                <ChevronRightIcon className="h4 w-4" />
            </div>
            </button>
        )}
        </>
    );
}

export default InsurerRow;