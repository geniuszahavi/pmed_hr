import axios from "axios";
import { SmallButton, Success } from "..";
import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import InsurerService from "@/services/InsurerService";

function DependantForm({ key, insurerId, dependants }) {
  const [hasPreExistingConditions, setHasPreExistingConditions] =
    useState(false);
  const [preConditions, setPreConditions] = useState([]);
  const [locations, setLocations] = useState([]);
  const [hospitals, setHospital] = useState([]);
  const [selectedPreCondition, setSelectedPreCondition] = useState("");
  const [openSuccess, setOpenSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    gender: dependants?.gender || "",
    preConditions: dependants?.pre_conditions || [],
    first_name: dependants?.first_name || "",
    middle_name: dependants?.middle_name || "",
    last_name: dependants?.last_name || "",
    email: dependants?.email || "",
    dob: dependants?.dob || "",
    phone: dependants?.phone_number || "",
    nationality: dependants?.nationality || "",
    state_of_origin: dependants?.state_of_origin || "",
    address: dependants?.address || "",
    insurance_id: dependants?.insurance_id || "",
    preferred_hospital_location: dependants?.preferred_hospital_location || "",
    preferred_hospital: dependants?.preferred_hospital || "",
    // level: dependants?.level || "",
    // staff_id: dependants?.staff_id || "",
  });

  // console.log(formData);
  // console.log(dependants);

  const editDependants = async (event) => {
    event.preventDefault();
    console.log("Testing....");
    // setDisabled(true);
    try {
      setFormData((prevData) => ({
        ...prevData,
        preConditions,
      }));

      console.log("Logining........");
      const formDataObject = new FormData();
      formDataObject.append("staff_id", dependants?.staff_id);
      formDataObject.append("dependant_id", dependants?.dependant_id);
      formDataObject.append("first_name", formData.first_name);
      formDataObject.append("middle_name", formData.middle_name);
      formDataObject.append("last_name", formData.last_name);
      formDataObject.append("gender", formData.gender);
      formDataObject.append("dob", formData.dob);
      formDataObject.append("address", formData.address);
      formDataObject.append("email_address", formData.email);
      formDataObject.append("phone_number", formData.phone);
      formDataObject.append("preferred_hospital_location", formData.preferred_hospital_location);
      formDataObject.append("preferred_hospital", formData.preferred_hospital);
      formDataObject.append("nationality", formData.nationality);
      formDataObject.append("pre_conditions", JSON.stringify(preConditions));

      const response = await InsurerService.updateDependant(formDataObject);
      console.log(response);
      setOpenSuccessModal(true);
      // toast.success(response.data.message);
      // setDisabled(false);
    } catch (error) {
      console.log(error);
      // toast.error(error.message);
      // setDisabled(false);
    }
  };
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  const handleRadioChange = (event) => {
    setHasPreExistingConditions(event.target.value === "yes");
  };
  const handleSelectChange = (e) => {
    setSelectedPreCondition(e.target.value);
  };

  const handleAddSelection = (e) => {
    e.preventDefault(); // Prevent page refresh

    setPreConditions([...preConditions, selectedPreCondition]);
    setSelectedPreCondition("");
  };
  const url = `https://api.coderigi.co/insurer/getLocations.php?insurer_id=${insurerId}`;
  useEffect(() => {
    async function getLocations() {
      await axios
        .get(url)
        .then((res) => {
          setLocations(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getLocations();
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    if (name === "preferred_hospital_location") {
      // Update the form data
      setFormData({
        ...formData,
        preferred_hospital_location: value,
        preferred_hospital: "", // Reset preferred_hospital when location changes
      });

      // Fetch hospitals based on the selected location
      // const hospitalUrl = `insurer/getProviderByLocation.php?insurer_id=${insurerId}&location=${value}`;
      const hospital = `https://api.coderigi.co/insurer/getProviderByLocation.php?insurer_id=${insurerId}&location=${value}`;

      try {
        const res = await axios.get(hospital);
        setHospital(res?.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      // If it's another input, update the form data as usual
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  // useEffect(() => {
  //   async function getHospital() {
  //     await axios
  //       .get(hospital)
  //       .then((res) => {
  //         setHospital(res?.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   getLocations();
  // });

  //
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
    <form key={key} className="h-full" onSubmit={editDependants}>
      <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-full">
        <div className="flex justify-between mb-5 gap-5">
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              First name
            </label>
            <input
              defaultValue={dependants?.first_name}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="First name"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Middle name
            </label>
            <input
              defaultValue={dependants?.middle_name}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Middle name"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Last name
            </label>
            <input
              defaultValue={dependants?.last_name}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Last name"
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
              defaultValue={dependants?.gender}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              placeholder="Gender"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Date of Birth
            </label>
            <input
              type="date"
              defaultValue={dependants?.dob}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Date of Birth"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Phone number
            </label>
            <input
              type="tel"
              defaultValue={dependants?.phone_number}
              onChange={handleInputChange}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Phone number"
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
              onChange={handleInputChange}
              defaultValue={dependants?.email_address}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              placeholder="Email address"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Nationality
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              defaultValue={dependants?.nationality}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Nationality"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              State of Origin
            </label>
            <input
              type="tel"
              defaultValue={dependants?.state_of_origin}
              onChange={handleInputChange}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="State of origin"
            />
          </div>
        </div>

        <div className="w-full mb-5">
          <label className="flex mb-1 text-[12px] font-semibold">Address</label>
          <input
            type="text"
            defaultValue={dependants?.address}
            onChange={handleInputChange}
            className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
            placeholder="Address"
          />
        </div>

        <div className="flex justify-between mb-5 gap-5">
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Relationship
            </label>
            <input
              defaultValue={dependants?.relationship_with_staff}
              onChange={handleInputChange}
              type="text"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              placeholder="Relationship"
            />
          </div>

          {/* <div className="w-full">
              <label className="flex mb-1 text-[12px] font-semibold">
                Preferred hospital location
              </label>
              <input
                type="text"
                defaultValue={dependants?.preferred_hospital_location}
                onChange={handleInputChange}
                className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
                placeholder="Preferred hospital location"
              />
            </div> */}
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Preferred hospital location
            </label>
            <select
              name="preferred_hospital_location"
              value={formData.preferred_hospital_location}
              onChange={handleInputChange}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
            >
              <option value="" disabled>
                Select preferred hospital location
              </option>
              {locations?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
              {/* <option value="location2">Location 2</option> */}
            </select>
          </div>
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Preferred hospital
            </label>
            <select
              name="preferred_hospital"
              value={formData.preferred_hospital}
              onChange={handleInputChange}
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
            >
              <option value="" disabled>
                Select preferred hospital{" "}
              </option>
              {hospitals?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col text-[#000] border border-[#051438] rounded-xl p-4">
          <div className="flex justify-between items-center">
            <p>Are there pre-existing conditions?</p>
            <div className="flex text-[16px] font-bold items-center gap-4">
              <div className="flex items-center gap-3">
                <label htmlFor="yes">Yes</label>
                <input
                  type="radio"
                  id="yes"
                  name="preConditions"
                  value="yes"
                  onChange={handleRadioChange}
                />
              </div>
              <div className="flex items-center gap-3">
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
            <div className="flex gap-3 items-center">
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

          {preConditions.length > 0 && (
            <div className="mt-3">
              <p>Selected Pre-existing Conditions:</p>
              <div className="flex gap-4">
                {preConditions.map((condition, index) => (
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

        <div></div>
        <div></div>
      </div>
      <div className="flex justify-end">
        <SmallButton text="Save all changes" type={'submit'} />
      </div>

      <Success
          visible={openSuccess}
          title="Dependant  updated successfully!"
          description="Your dependant has been updated"
          closeModal={() => setOpenSuccessModal(false)}
        />
    </form>
  );
}

export default DependantForm;
