import { ChevronRightIcon, InformationCircleIcon, PencilIcon, TrashIcon, UserIcon } from "@heroicons/react/outline";


function PlanRow({ openPlan }) {
    return (
        <div className="mb-3 rounded-[10px] px-[16px] bg-white w-full flex justify-between items-start pt-2 pb-2">
            <div className="">
                <span className="text-[#051438] text-[16px] font-medium">Basic</span>
            </div>
            <button className="flex text-left" type="button" onClick={openPlan}>
                <span className="text-[#051438] text-[16px] line-clamp-3 font-medium w-[200px] ">Medical Coverage: Comprehensive coverage for doctor&apos;s visits, hospitalization, and prescription medications. Preventive Care: Coverage for routine check-ups, vaccinations, and screenings. Dental and Vision Coverage: Benefits for dental and eye care services. Emergency Services: Coverage for urgent medical care and ambulance services.</span>
                <InformationCircleIcon className="h-3 w-3" />
            </button>

            <button className="flex text-left" type="button" onClick={openPlan}>
                <span className="text-[#051438] text-[16px] line-clamp-3 font-medium w-[200px] ">Continental Lagoon Hospitals Lekki Lagos, XYZ hospitals Asokoro Abuja, ABC hospitals, XYZ hospitals, XYZ hospitals, XYZ hospitals, XYZ hospitals, XYZ hospitals, XYZ hospitals, XYZ hospitals, XYZ hospitals, XYZ hospitals</span>
                <InformationCircleIcon className="h-3 w-3" />
            </button>

            <button className="flex text-left" type="button" onClick={openPlan}>
                <span className="text-[#051438] text-[16px] line-clamp-3 font-medium w-[200px] ">Asthma, Minor Surgeries, Cataract, Sickle cell disease, Persistent chest pain</span>
                <InformationCircleIcon className="h-3 w-3" />
            </button>


            <div className="">
                <span className="text-[#051438] text-[16px] font-medium">32,000</span>
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

export default PlanRow;