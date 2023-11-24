import { SmallButton, Success } from "..";
import { useFormik } from "formik";
import { object, string } from "yup";
import toast, { Toaster } from "react-hot-toast";
import InsurerService from "@/services/InsurerService";
import { useState } from "react";
import axios from "axios";
import { RiDeleteBin5Fill } from "react-icons/ri";

function PrimaryEnrolleeForm({ enrollee, id }) {
  const [disabled, setDisabled] = useState(false);
  const [hasPreExistingConditions, setHasPreExistingConditions] =
  useState(false);
const [preConditions, setPreConditions] = useState([]);
const [selectedPreCondition, setSelectedPreCondition] = useState("");
const [openSuccess, setOpenSuccessModal] = useState(false);


  const [formData, setFormData] = useState({
    gender: enrollee?.gender || "",
    preConditions: enrollee?.pre_conditions || [],
    first_name: enrollee?.first_name || "",
    middle_name: enrollee?.middle_name || "",
    last_name: enrollee?.last_name || "",
    email: enrollee?.email || "",
    phone: enrollee?.phone_number || "",
    nationality: enrollee?.nationality || "",
    state_of_origin: enrollee?.state_of_origin || "",
    address: enrollee?.address || "",
    insurance_id: enrollee?.insurance_id || "",
    job_title: enrollee?.job_title || "",
    level: enrollee?.level || "",
    staff_id: enrollee?.staff_id || "",
  });

// console.log(formData)
// console.log(preConditions)

  const editStaff = async (event) => {
    event.preventDefault();
    console.log("Testing....");
    setDisabled(true);
    try {
      setFormData((prevData) => ({
        ...prevData,
        preConditions,
      }));

      console.log("Logining........");
      const formDataObject = new FormData();
      formDataObject.append("staff_id", enrollee?.staff_id,);
      formDataObject.append("first_name", formData.first_name);
      formDataObject.append("last_name", formData.last_name);
      formDataObject.append("address", formData.address);
      formDataObject.append("phone_number", formData.phone);
      formDataObject.append("middle_name", formData.middle_name);
      formDataObject.append("nationality", formData.nationality);
      formDataObject.append("pre_conditions", JSON.stringify(preConditions));

      const response = await InsurerService.updateStaff( formDataObject);
      // console.log(response);
      setOpenSuccessModal(true)
      toast.success(response.data.message);
      setDisabled(false);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setDisabled(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  
  const handleRadioChange = (event) => {
    setHasPreExistingConditions(event.target.value === "yes");
  };
  const handleSelectChange = (e) => {
    setSelectedPreCondition(e.target.value);
  };

  const handleAddSelection = (e) => {
    e.preventDefault();

    setPreConditions([...preConditions, selectedPreCondition]);
    setSelectedPreCondition("");
  };

  const handleRemoveSelection = (index) => {
    const updatedPreConditions = [...preConditions];
    updatedPreConditions.splice(index, 1);
    setPreConditions(updatedPreConditions);
  };

  const handleUpdateConditions = () => {
    if (selectedPreCondition.trim() !== "") {
      setPreConditions([...preConditions, selectedPreCondition]);
      setSelectedPreCondition("");
    }
  };
  return (
    <form className="h-full" onSubmit={editStaff}>

      <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-full">
        <div className="flex justify-between mb-5 gap-5">
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              First name {enrollee?.staff_id}
            </label>
            <input
              type="text"
              name="first_name"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              onChange={handleInputChange}
              defaultValue={enrollee?.first_name}
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Middle name
            </label>
            <input
              type="text"
              name="middle_name"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              onChange={handleInputChange}
              // onBlur={handleBlur}
              defaultValue={enrollee?.middle_name}
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Last name
            </label>
            <input
              type="text"
              name="last_name"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              onChange={handleInputChange}
              // onBlur={handleBlur}
              defaultValue={enrollee?.last_name}
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
              name="gender"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              disabled
              defaultValue={enrollee?.gender}
            />
          </div>

          {/* <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={enrollee?.dob}
            />
          </div> */}

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Enter organization phone"
              onChange={handleInputChange}
              // onBlur={handleBlur}
              defaultValue={enrollee?.phone_number}
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
              name="email"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              disabled
              defaultValue={enrollee?.email}
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              onChange={handleInputChange}
              // onBlur={handleBlur}
              defaultValue={enrollee?.nationality}
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              State of Origin
            </label>
            <input
              type="text"
              name="state_of_origin"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              onChange={handleInputChange}
              // onBlur={handleBlur}
              defaultValue={enrollee?.state_of_origin}
            />
          </div>
        </div>

        <div className="flex justify-between mb-5 gap-5">
          <div className="w-[68%]">
            <label className="flex mb-1 text-[12px] font-semibold">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              onChange={handleInputChange}
              // onBlur={handleBlur}
              defaultValue={enrollee?.address}
            />
          </div>

          <div className="w-[33%]">
            <label className="flex mb-1 text-[12px] font-semibold">
              Insurance ID
            </label>
            <input
              type="text"
              name="insurance_id"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              onChange={handleInputChange}
              // onBlur={handleBlur}
              defaultValue={enrollee?.insurance_id}
            />
          </div>
        </div>

        <div className="flex justify-between mb-5 gap-5">
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Job title
            </label>
            <input
              type="text"
              name="job_title"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              disabled
              defaultValue={enrollee?.job_title}
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">Level</label>
            <input
              type="text"
              name="level"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              disabled
              defaultValue={enrollee?.level}
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Staff ID
            </label>
            <input
              type="text"
              name="staff_id"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              disabled
              defaultValue={enrollee?.staff_id_number}
            />
          </div>
        </div>
        <div className="flex justify-between items-center text-[#000] ">
          <p>Are there pre-existing conditions?</p>
          <div className="flex text-[16px] font-bold items-center gap-4">
            <div className="flex items-center gap-3 text-[#000]">
              <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                id="yes"
                name="preConditions"
                value="yes"
                onChange={handleRadioChange}
              />
            </div>
            <div className="flex items-center gap-3 text-[#000]">
              <label htmlFor="no">No</label>
              <input
                type="radio"
                id="no"
                name="preConditions"
                value="no"
                onChange={handleRadioChange}
              />
            </div>
          </div>
        </div>

        {hasPreExistingConditions ? (
          <div className="flex gap-3 items-center text-[#000]">
            <select
              id="selectPreCondition"
              value={selectedPreCondition}
              onChange={handleSelectChange}
              className="w-2/3 p-3 border rounded-xl"
            >
              <option value="" disabled>
                Select conditions
              </option>
              <option value="condition1">Condition 1</option>
              <option value="condition2">Condition 2</option>
            </select>
            <button
              onClick={(e) => handleAddSelection(e)}
              className="bg-[#0B0C7D] text-[#fff] p-3 rounded-xl "
            >
              Add Selection
            </button>
        
          </div>
        ) : null}
        {hasPreExistingConditions && preConditions.length > 0 && (
          <div className="mt-3 text-[#000]">
            <p>Selected Pre-existing Conditions:</p>
            <div className="flex gap-4">
              {preConditions.map((condition, index) => (
                <div className="">
                
                <div
                  key={index}
                  className="bg-[#EDF0F8] rounded-xl p-3 flex items-center"
                >
                  <span>{condition}</span>

                  <button
                    onClick={() => handleRemoveSelection(index)}
                    className="ml-2 text-red-500"
                  >
                    <RiDeleteBin5Fill />
                    
                  </button>
                  
                </div>

      
                </div>
                
              ))}
            </div>
            <div className="flex justify-end">

            <button
      onClick={() => handleUpdateConditions()}
      className="bg-[#fff] text-[#0B0C7D] border font-bold border-[#0B0C7D] p-3 rounded-xl  "
      >
      Update
    </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <SmallButton text="Save all changes" type="submit" />
      </div>


      <Success
          visible={openSuccess}
          title="Staff list updated successfully!"
          description="Your staff list has been updated"
          closeModal={() => setOpenSuccessModal(false)}
        />
    </form>
  );
}

export default PrimaryEnrolleeForm;
