import { PencilIcon, TrashIcon } from "@heroicons/react/outline";


function PreExistingConditionRow() {
    return (
        <div className="mb-3 rounded-[10px] px-[16px] bg-white w-full flex justify-between items-center py-[12px]">
            <div className="w-full">
                <span className="text-[#051438] text-[16px] font-medium">Asthma</span>
            </div>


            <div className="flex gap-4">
                <button className="border border-[#0B0C7D] rounded-[10px] bg-white flex items-center justify-center w-[40px] h-[32px]">
                    <PencilIcon className="h-4 w-4 text-[#0B0C7D]" />
                </button>

                <button className="border border-[#FF4D4D] rounded-[10px] bg-[#FF4D4D] flex items-center justify-center w-[40px] h-[32px]">
                    <TrashIcon className="h-4 w-4 text-white" />
                </button>
            </div>
        </div>
    );
}

export default PreExistingConditionRow;