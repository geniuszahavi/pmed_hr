import { SmallButton } from ".";


function EnrolmentProfileForm() {
    return (
        <form className="h-full overflow-y-hidden">
            <div className="w-full bg-white p-[16px] border border-[#DFE2E9] rounded-[10px] mb-5 overflow-y-scroll h-[90%]">
                <div className="w-full flex gap-3 justify-between items-center mb-3">
                    <span className="text-[#051438] font-semibold text-[16px]">Staff information</span>
                    <span className="w-[85%] h-[1px] flex bg-[#DFE2E9]"></span>
                </div>
                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">First name</label>
                        <input type="text" name="firstname" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Middle name</label>
                        <input type="text" name="middlename" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Last name</label>
                        <input type="text" name="lastname" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>
                </div>

                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Gender</label>
                        <input type="text" name="gender" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Date of Birth</label>
                        <input type="date" name="dob" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Phone number</label>
                        <input type="tel" name="phone" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>
                </div>

                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Email address</label>
                        <input type="email" name="email" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Nationality</label>
                        <input type="text" name="nationality" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">State of origin</label>
                        <input type="text" name="state" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>
                </div>


                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-[67%]">
                        <label className="flex mb-1 text-[12px] font-semibold">Address</label>
                        <input type="text" name="address" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-[33%]">
                        <label className="flex mb-1 text-[12px] font-semibold">Signature</label>
                        <input type="text" name="signature" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>
                </div>

                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Job title</label>
                        <input type="text" name="jon" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Level</label>
                        <input type="text" name="level" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Staff ID</label>
                        <input type="text" name="staff" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>
                </div>


                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Job title</label>
                        <input type="email" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Level</label>
                        <input className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Staff ID</label>
                        <input className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>
                </div>


                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Plan</label>
                        <input type="text" name="plan" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Preferred hospital location</label>
                        <input type="text" name="locatiom" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Preferred hospital</label>
                        <input type="text" name="hospital" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <SmallButton text="Save &amp; continue" />
            </div>
        </form>
    );
}

export default EnrolmentProfileForm;