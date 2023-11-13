import { PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import building from "@/assets/building.png";
import { SmallButton } from "..";
import Image from "next/image";


function Plan({ visible, closeModal }) {
    return (
        <div className={`${visible ? "bg-[#000] bg-opacity-70 fixed top-0 w-full h-full py-2" : "hidden"}`}>

            <div className="bg-[#EDF0F8] mx-auto w-[50%] rounded-[10px] py-[16px] px-[32px]">
                <div className="mb-5 flex justify-between items-center">
                    <h4 className="text-[18px] text-[#051438] font-semibold">Plan details: Bronze</h4>
                    <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={closeModal}>
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-[16px] bg-white rounded-[10px] mb-4">
                    <div className="w-full flex gap-3 justify-between items-center mb-3">
                        <span className="text-[#A6AFC2] font-bold text-[16px]">Primary enrollee</span>
                        <span className="w-[78%] h-[1px] flex bg-[#DFE2E9]"></span>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-1 mb-3">
                            <span className="text-[12px] text-[#677597] font-semibold">Name of plan</span>
                            <span className="text-[16px] text-[#051438] font-medium">Bronze</span>
                        </div>

                        <div className="flex flex-col gap-1 mb-3">
                            <span className="text-[12px] text-[#677597] font-semibold">Premium amount (₦)</span>
                            <span className="text-[16px] text-[#051438] font-medium">32,000</span>
                        </div>
                    </div>
                </div>

                <div className="p-[16px] bg-white rounded-[10px] mb-4">
                    <div className="w-full flex gap-3 justify-between items-center mb-3">
                        <span className="text-[#A6AFC2] font-bold text-[16px]">Benefits</span>
                        <span className="w-[88%] h-[1px] flex bg-[#DFE2E9]"></span>
                    </div>
                    <p className="text-[#051438] text-[16px]">
                        Medical Coverage: Comprehensive coverage for doctor&apos;s visits, hospitalization, and prescription medications. Preventive Care: Coverage for routine check-ups, vaccinations, and screenings. Dental and Vision Coverage: Benefits for dental and eye care services. Emergency Services: Coverage for urgent medical care and ambulance services.
                    </p>
                </div>

                <div className="p-[16px] bg-white rounded-[10px] mb-4">
                    <div className="w-full flex gap-3 justify-between items-center mb-3">
                        <span className="text-[#A6AFC2] font-bold text-[16px]">Providers</span>
                        <span className="w-[88%] h-[1px] flex bg-[#DFE2E9]"></span>
                    </div>
                    <ul className="list-disc grid grid-cols-2 px-[16px]">
                        <li className="mb-5">Continental Hospitals, Lekki, Lagos</li>
                        <li className="mb-5">Continental Hospitals, Lekki, Lagos</li>
                        <li className="mb-5">Continental Hospitals, Lekki, Lagos</li>
                        <li className="mb-5">Continental Hospitals, Lekki, Lagos</li>
                        <li className="">Continental Hospitals, Lekki, Lagos</li>
                    </ul>
                </div>

                <div className="p-[16px] bg-white rounded-[10px]">
                    <div className="w-full flex gap-3 justify-between items-center mb-3">
                        <span className="text-[#A6AFC2] font-bold text-[16px]">Pre-existing conditions</span>
                        <span className="w-[70%] h-[1px] flex bg-[#DFE2E9]"></span>
                    </div>
                    <ul className="list-disc grid grid-cols-5 px-[16px]">
                        <li className="">Asthma</li>
                        <li className="">Goitre</li>
                        <li className="">HIV/AIDS</li>
                        <li className="">Minor surgery</li>
                        <li className="">Hypertension</li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default Plan;