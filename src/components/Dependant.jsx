import { ChevronDownIcon } from "@heroicons/react/outline";


function Dependants({ name }) {
    return (
        <div className="mb-4 w-full">
            <button className="bg-[#EFF1F4] rounded-[10px] py-[12px] px-[16px] w-full flex justify-between items-center">
                <span className="text-[#051438] text-[16px] font-medium">{ name }</span>
                <ChevronDownIcon className="h-4 w-4" />
            </button>
        </div>
    );
}

export default Dependants;