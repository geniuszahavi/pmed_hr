import Image from "next/image";
import building from "@/assets/building.png";


function AccountForm() {
    return (
        <form>
            <div className="flex gap-5 w-full items-center border-b border-[#DFE2E9] pb-4 mb-4">
                <div>
                    <Image src={building} width="72" height="" alt="" />
                </div>
                <div className="w-full">
                    <label className="flex mb-1">Insurer name</label>
                    <input className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" defaultValue="Smathealth HMO" />
                </div>
            </div>
        </form>
    );
}

export default AccountForm;