import { MinusCircleIcon, PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import document from "@/assets/text-document.png";
import smallDocument from "@/assets/small-document.png";
import { SmallButton } from "..";
import Image from "next/image";


function UploadStaffDetailModal({ visible, closeModal }) {
    return (
        <div className={`${visible ? "bg-[#EDF0F8] fixed top-0 w-full h-screen py-[16px] px-[32px] z-[200] " : "hidden"}`}>

            <div className="mb-6 flex justify-between items-center">
                <h4 className="text-[18px] text-[#051438] font-semibold">Upload staff details</h4>
                <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={closeModal}>
                    <XIcon className="w-5 h-5" />
                </button>
            </div>

            <form className="h-full">
                <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-[400px] flex flex-col justify-center items-center">
                    
                    <Image src={document} width="83" height="" alt="" className="mb-5" />

                    <h5 className="text-[#051438] text-[24px] font-semibold mb-2">Upload your file here</h5>
                    <p className="text-[#0B0C7D] text-[16px] underline underline-offset-4 font-semibold mb-4">Click here to select file from your computer</p>

                    <p className="text-[#051438] text-[16px] font-medium mb-4">(File allowed: CSV)</p>


                    <button className="text-[#0B0C7D] bg-white rounded-[10px] py-[12px] px-[16px] border border-[#0B0C7D] text-center font-semibold">Download sample CSV here</button>
                    
                </div>

                <div>
                    <h5 className="text-[#051438] text-[24px] font-semibold mb-4">Upload files</h5>
                    <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 flex gap-6 items-center">
                        
                        <Image src={smallDocument} width="40" height="" alt="" className="" />

                        <div className="w-full flex flex-col gap-5">
                            <div className="flex justify-between items-center">
                                <span className="text-[#051438] text-[16px] font-medium">Providers%list.csv</span>
                                <p className="flex items-center gap-2">
                                    <span className="text-[#677597] text-[14px] font-medium">1.5MB</span>
                                    <span className="flex h-[10px] w-[1px] bg-[#677597]"></span>
                                    <span className="text-[#677597] text-[14px] font-medium">Completed</span>
                                </p>
                            </div>
                            <div className="w-full bg-[#DFE2E9] rounded-[6px] relative flex h-[6px]">
                                <div className="w-[80%] h-full bg-[#0000CC] rounded-[6px]"></div>
                            </div>
                        </div>

                        <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={closeModal}>
                            <XIcon className="w-5 h-5" />
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

export default UploadStaffDetailModal;