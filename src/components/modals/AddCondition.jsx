import { MinusCircleIcon, PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import building from "@/assets/building.png";
import { SmallButton } from "..";
import Image from "next/image";


function AddConditionModal({ visible, closeModal }) {
    return (
        <div className={`${visible ? "bg-[#EDF0F8] fixed top-0 w-full h-full py-[16px] px-[32px] z-[200]" : "hidden"}`}>

            <div className="mb-8 flex justify-between items-center">
                <h4 className="text-[18px] text-[#051438] font-semibold">Add condition</h4>
                <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={closeModal}>
                    <XIcon className="w-5 h-5" />
                </button>
            </div>

            <form className="h-full">
                <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-[512px]">
                    
                    <div className="flex mb-5 gap-3 items-center">
                        <div className="w-full">
                            <label className="flex mb-1 text-[12px] font-semibold">Pre-existing condition</label>
                            <input className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                        </div>
                        <button type="button">
                            <MinusCircleIcon className="h-4 w-4 text-[#FF4D4D]" />
                        </button>
                    </div>


                    <div className="flex mb-5 gap-3 items-center">
                        <div className="w-full">
                            <label className="flex mb-1 text-[12px] font-semibold">Pre-existing condition</label>
                            <input className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                        </div>
                        <button type="button">
                            <PlusCircleIcon className="h-4 w-4 text-[#0B0C7D]" />
                        </button>
                    </div>
                    
                </div>
                <div className="flex justify-end">
                    <SmallButton text="Save" />
                </div>
            </form>

        </div>
    );
}

export default AddConditionModal;