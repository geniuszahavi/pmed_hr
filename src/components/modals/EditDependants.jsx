import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import {  SmallButton } from "..";

function EditDependants({
  visible,
  closeModal,
//   orgs: enrollee,
  dependants,
  staff_id,
}) {
    const [hasPreExistingConditions, setHasPreExistingConditions] =
    useState(false);
  const [preConditions, setPreConditions] = useState([]);
  const [selectedPreCondition, setSelectedPreCondition] = useState("");

  const handleRadioChange = (event) => {
    setHasPreExistingConditions(event.target.value === "yes");
  };
  const handleSelectChange = (e) => {
    setSelectedPreCondition(e.target.value);
  };

  const handleAddSelection = (e) => {
    e.preventDefault(); 

    setPreConditions([...preConditions, selectedPreCondition]);
    setSelectedPreCondition('');
  };
//  console.log(dependants)
  return (
    <div
      className={`${
        visible
          ? "fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50"
          : "hidden"
      }`}
    >
      <div
        className={`${
          visible
            ? "bg-[#EDF0F8] text-[#000] fixed w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-[16px] px-[32px] z-[200]"
            : "hidden"
        }`}
      >
         <div className="mb-8 flex justify-between items-center">
          <h4 className="text-[18px] text-[#051438] font-semibold">
            Edit dependant information
          </h4>
          <button
            className="w-[32px] text-[#000] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]"
            onClick={closeModal}
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      <form  className="h-full">
      
      <div  className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-full">
        <div className="flex justify-between mb-5 gap-5">
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              First name
            </label>
            <input
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="First name"
              defaultValue={dependants?.first_name}
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Middle name
            </label>
            <input
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Middle name"
              defaultValue={dependants?.middle_name}

            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Last name
            </label>
            <input
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Last name"
              defaultValue={dependants?.last_name}

            />
          </div>
        </div>

        <div className="flex justify-between mb-5 gap-5">
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Gender
            </label>
            <input
              type="text"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              placeholder="Gender"
              defaultValue={dependants?.gender}

            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Date of Birth
            </label>
            <input
              type="date"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Date of Birth"
              defaultValue={dependants?.dob}

            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Phone number
            </label>
            <input
              type="tel"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Phone number"
              defaultValue={dependants?.phone_number}
            />
          </div>
        </div>

        <div className="flex justify-between mb-5 gap-5">
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Email address
            </label>
            <input
              type="email"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              placeholder="Email address"
              defaultValue={dependants?.email_address}

            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Nationality
            </label>
            <input
              type="text"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Nationality"
              defaultValue={dependants?.nationality}

            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              State of Origin
            </label>
            <input
              type="tel"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="State of origin"
              defaultValue={dependants?.state_of_origin}

            />
          </div>
        </div>

        <div className="w-full mb-5">
          <label className="flex mb-1 text-[12px] font-semibold">Address</label>
          <input
            type="email"
            className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
            placeholder="Address"
            defaultValue={dependants?.address}
          />
        </div>

        <div className="flex justify-between mb-5 gap-5">
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Relationship
            </label>
            <input
              type="text"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              placeholder="Relationship"
              defaultValue={dependants?.relationship_with_staff}
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Preferred hospital location
            </label>
            <input
              type="text"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              placeholder="Preferred hospital location"
              defaultValue={dependants?.location}
              
              />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Preferred hospital
            </label>
            <input
              type="text"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              placeholder="Preferred hospital"
              defaultValue={dependants?.provider}
            />
          </div>
        </div>
     

      
      <div>
      </div>
        <div>

        </div>
      </div>
      <div className="flex justify-end">
        <SmallButton text="Save all changes" />
      </div>
    </form>
      </div>
    </div>
  );
}

export default EditDependants;
