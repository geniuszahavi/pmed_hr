import { PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import success from "@/assets/success.png";
import { Button, SmallButton } from "..";
import Image from "next/image";
import useSuccess from "@/hooks/useSuccess";


function Success({ visible, closeModal }) {
    const [isActive] = useSuccess(visible);
    
    return (
        <div className={`${isActive ? "bg-[#000] bg-opacity-70 fixed top-0 w-full h-full flex flex-col justify-center items-center" : "hidden"}`}>

            <div className="bg-[#EDF0F8] mx-auto w-[25%] rounded-[10px] py-[16px] px-[24px]">
                <h2 className="text-[18px] text-[#051438] font-semibold text-center mb-1">Staff information updated successfully!</h2>
                <p className="text-[16px] text-[#58627A] font-medium text-center mb-6 px-10">The staff information has been updated and submitted to Smathealth Medicare Limited</p>

                <div className="flex justify-center items-center bg-white rounded-[10px] border-t-[8px] border-[#3FB772] pt-[24px] px-[16px] pb-[16px] mb-4">
                    <Image src={success} width="64" height="64" alt="Success" />
                </div>

                <Button text="Close" />

            </div>

        </div>
    );
}

export default Success;