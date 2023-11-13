import { PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import building from "@/assets/building.png";
import { SmallButton } from "..";
import Image from "next/image";


function AddPlanModal({ visible, closeModal }) {
    return (
        <div className={`${visible ? "bg-[#EDF0F8] fixed top-0 w-full h-full py-[16px] px-[32px] z-[200]" : "hidden"}`}>

            <div className="mb-8 flex justify-between items-center">
                <h4 className="flex flex-col gap-1">
                    <span className="text-[18px] text-[#051438] font-semibold">Add plan</span>
                    <span className="text-[14px] text-[#677597] font-medium">Enter the plan information in the fields below</span>
                </h4>
                <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={closeModal}>
                    <XIcon className="w-5 h-5" />
                </button>
            </div>

            <form className="h-full">
                <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-[512px]">
                    
                    <div className="flex justify-between mb-5 gap-5">
                        <div className="w-[60%]">
                            <label className="flex mb-1 text-[12px] font-semibold">Name of plan</label>
                            <input type="text" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                        </div>

                        <div className="w-[20%]">
                            <label className="flex mb-1 text-[12px] font-semibold">Premium amount (₦)</label>
                            <input type="number" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                        </div>

                        <div className="w-[20%]">
                            <label className="flex mb-1 text-[12px] font-semibold">Start date</label>
                            <input type="date" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                        </div>
                    </div>

                    <div className="flex justify-between mb-5 gap-5">
                        <div className="w-full">
                            <label className="flex mb-1 text-[12px] font-semibold">Benefits</label>
                            <textarea className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" rows={3}></textarea>
                        </div>
                    </div>

                    <div className="w-full mb-5">
                        <label className="flex mb-1 text-[12px] font-semibold">Pre-existing conditions</label>
                        <input className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" placeholder="Select pre-existing conditions" />
                    </div>
                    
                </div>
                <div className="flex justify-end">
                    <SmallButton text="Save" />
                </div>
            </form>

        </div>
    );
}

export default AddPlanModal;