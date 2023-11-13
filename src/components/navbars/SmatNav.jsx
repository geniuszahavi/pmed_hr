import logo from "@/assets/smathealth-2.png";
import Image from "next/image";

function SmatNav({ name, openSignOut }) {
    return (
        <nav className="flex justify-between items-center py-[8px] px-[32px] w-full bg-[#EDF0F8] border-b border-[#DFE2E9]">
            <Image src={logo} width="200" height="" className="" alt="" />
            <button className="flex gap-4 items-center" type="button" onClick={openSignOut}>
                <p className="text-[#051438] font-bold text-[18px]">Hi, { name }</p>
                <span className="bg-[#A6AFC2] w-[26px] h-[26px] rounded-full flex items-center justify-center text-white">Y</span>
            </button>
        </nav>
    );
}

export default SmatNav;