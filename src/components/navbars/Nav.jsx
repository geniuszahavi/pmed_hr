import logo from "@/assets/plateaumed-logo.png";
import Image from "next/image";

function Nav() {
    return (
        <nav className="flex justify-between items-center py-[8px] px-[32px] w-full bg-[#EDF0F8] border-b border-[#DFE2E9]">
            <Image src={logo} width="115" height="" className="" />

            <div className="flex gap-4 items-center">
                <p className="text-[#051438] font-bold text-[18px]">Hi, Emmanuel</p>
                <span className="bg-[#A6AFC2] w-[26px] h-[26px] rounded-full flex items-center justify-center text-white">E</span>
            </div>
        </nav>
    );
}

export default Nav;