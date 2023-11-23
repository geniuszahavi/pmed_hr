import logo from "@/assets/smathealth-2.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function SmatNav({ name, openSignOut }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const closeDropdown = () => {
      setIsOpen(false);
    };
    return (
        <nav className="flex justify-between items-center py-[8px] px-[32px] w-full bg-[#EDF0F8] border-b border-[#DFE2E9]">
            <Image src={logo} width="200" height="" className="" alt="" />
            <div className="flex gap-4 items-center">
        <button
          className="flex gap-4 items-center"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
        >
          <p className="text-[#051438] font-bold text-[18px]">Hi, {name}</p>
          <span className="bg-[#A6AFC2] w-[26px] h-[26px] rounded-full flex items-center justify-center text-white"></span>
        </button>

        {isOpen && (
          <ul
            onClick={closeDropdown}
            className="absolute z-10 flex flex-col gap-3 text-[16px] text-[#000] font-bold right-20 top-[60px] px-4 py-4 m-0 w-[150px] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700"
          >
            {/* <Link
              href={"/dashboard/settings/staff"}
              className=" flex gap-4 items-center "
            >
              <span>Settings</span>
            </Link> */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={openSignOut}>
              Signout
            </div>
          </ul>
        )}
      </div>
        </nav>
    );
}

export default SmatNav;