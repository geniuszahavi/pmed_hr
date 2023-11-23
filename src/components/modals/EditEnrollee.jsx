import { useState } from 'react';
import { XIcon } from "@heroicons/react/outline";
import { DependantForm, PrimaryEnrolleeForm } from "..";

function EditEnrolleeModal({ visible, closeModal, enrollee }) {
    const [activeTab, setActiveTab] = useState('primary');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (

        <div  className={`${
            visible
              ? "fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50"
              : "hidden"
          }`}>
            
        <div className={`${ visible
            ? "bg-[#EDF0F8] fixed w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-[16px] px-[32px] z-[200]"
            : "hidden"
        }`}>
            <div className="mb-8 flex justify-between items-center">
                <h4 className="text-[18px] text-[#051438] font-semibold">Edit enrollee information</h4>
                <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={closeModal}>
                    <XIcon className="w-5 h-5 text-[#000]" />
                </button>
            </div>

            <div className="border-b-[2px] border-[#DFE2E9] pb-[2px] w-[270px] flex gap-8 items-center mb-5">
                <button
                    className={`text-[16px] font-semibold text-center ${activeTab === 'primary' ? 'text-[#0B0C7D] border-[#0B0C7D] border-b-2' : 'text-[#7A90C2]'} w-full`}
                    onClick={() => handleTabChange('primary')}
                >
                    Primary enrollee
                </button>
                <button
                    className={`text-[16px] font-semibold text-center ${activeTab === 'dependants' ? 'text-[#0B0C7D] border-[#0B0C7D] border-b-2' : 'text-[#7A90C2]'} w-full`}
                    onClick={() => handleTabChange('dependants')}
                >
                    Dependants
                </button>
            </div>

            {activeTab === 'primary' && enrollee?.staff_members?.map((item) => (
                <PrimaryEnrolleeForm enrollee={item} key={item.id} />
            ))}

            {activeTab === 'dependants' && enrollee.dependants ? <> 
            {
                enrollee?.dependants?.map((item)=>(
                   <DependantForm dependants={item} />
               )) 

            }
            
            </>:
           null
            
            }
        </div>
        </div>
    );
}

export default EditEnrolleeModal;
