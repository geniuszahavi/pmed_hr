import { XIcon } from "@heroicons/react/outline";
import { PrimaryEnrolleeForm } from ".";


function EditEnrolleeModal({ visible, closeModal, enrollee }) {
    return (
        <div className={`${visible ? "bg-[#EDF0F8] fixed top-0 w-full h-full py-[16px] px-[32px]" : "hidden"}`}>
            <div className="mb-8 flex justify-between items-center">
                <h4 className="text-[18px] text-[#051438] font-semibold">Edit enrollee information</h4>
                <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={closeModal}>
                    <XIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="border-b-[2px] border-[#DFE2E9] pb-[2px] w-[270px] flex gap-8 items-center mb-5">
                <button className="text-[16px] font-semibold text-center text-[#0B0C7D] w-full">Primary enrollee</button>
                <button className="text-[16px] font-semibold text-center text-[#7A90C2] w-full">Dependants</button>
            </div>

            <PrimaryEnrolleeForm enrollee={enrollee} />
            {/* <DependantForm /> */}
        </div>
    );
}

export default EditEnrolleeModal;