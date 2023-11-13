import { InformationCircleIcon, PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import success from "@/assets/success.png";
import { Button, SmallButton, SmallButtonWhite } from "..";
import Image from "next/image";
import useSuccess from "@/hooks/useSuccess";


function Logout({ visible, closeModal, logout }) {
    //const [isActive] = useSuccess(visible);
    
    return (
        <div className={`${visible ? "bg-[#000] bg-opacity-70 fixed top-0 w-full h-full flex flex-col justify-center items-center" : "hidden"}`}>
            <div className="bg-[#EDF0F8] rounded-[10px] py-[16px] px-[24px] mx-auto w-[640px]">
                <div className="mb-3 flex justify-between items-center">
                    <span className="text-[#FF4D4D] text-[18px] font-semibold">Sign out</span>
                    <InformationCircleIcon className="h-4 w-4 text-[#FF4D4D]" />
                </div>
                <div className="p-[10px] rounded-[10px] bg-white flex flex-col gap-3 mb-7">
                    <span className="text-[#051438] text-[16px] font-medium">You are about to sign out of this session</span>
                    <span className="text-[#677597] text-[16px] font-medium">Do you wish to proceed?</span>
                </div>
                <div className="flex justify-end gap-6 items-center">
                    <SmallButtonWhite text="Back" onClick={closeModal}  />
                    <SmallButton text="Proceed" onClick={logout} />
                </div>
            </div>

            

        </div>
    );
}

export default Logout;