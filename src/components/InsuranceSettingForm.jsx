import Image from "next/image";
import building from "@/assets/building.png";


function InsuranceSettingForm() {
    return (
        <form>
            <div className="flex justify-start mb-5 gap-5">
                <div className="">
                    <label className="flex mb-1 text-[12px] font-semibold">Prefix</label>
                    <input className="text-[#051438] py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" defaultValue="SMAT" />
                </div>

                <div className="">
                    <label className="flex mb-1 text-[12px] font-semibold">Number (the starting point)</label>
                    <input type="number" className="text-[#051438] py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" defaultValue="0001" />
                </div>

                <div className="">
                    <label className="flex mb-1 text-[12px] font-semibold">Suffix</label>
                    <input className="text-[#051438] py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" placeholder="Enter suffix" />
                </div>
            </div>
        </form>
    );
}

export default InsuranceSettingForm;