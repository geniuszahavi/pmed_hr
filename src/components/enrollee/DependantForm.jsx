import { SmallButton } from "..";


function DependantForm() {
    return (
        <form className="h-full">
            <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-[512px]">
                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">First name</label>
                        <input className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" placeholder="First name" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Middle name</label>
                        <input className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" placeholder="Middle name" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Last name</label>
                        <input className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" placeholder="Last name" />
                    </div>
                </div>

                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Gender</label>
                        <input type="text" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" placeholder="Gender" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Date of Birth</label>
                        <input type="date" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" placeholder="Date of Birth" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Phone number</label>
                        <input type="tel" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" placeholder="Phone number" />
                    </div>
                </div>


                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Email address</label>
                        <input type="email" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" placeholder="Email address" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Nationality</label>
                        <input type="text" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" placeholder="Nationality" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">State of Origin</label>
                        <input type="tel" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" placeholder="State of origin" />
                    </div>
                </div>


                <div className="w-full mb-5">
                    <label className="flex mb-1 text-[12px] font-semibold">Address</label>
                    <input type="email" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" placeholder="Address" />
                </div>

                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Relationship</label>
                        <input type="text" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" placeholder="Relationship" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Preferred hospital location</label>
                        <input type="text" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" placeholder="Preferred hospital location" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Preferred hospital</label>
                        <input type="text" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" placeholder="Preferred hospital" />
                    </div>
                </div>
                
            </div>
            <div className="flex justify-end">
                <SmallButton text="Save all changes" />
            </div>
        </form>
    );
}

export default DependantForm;