import { SmallButton } from "..";
import { useState } from "react";

function DependantForm({ key }) {
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
    e.preventDefault(); // Prevent page refresh

    setPreConditions([...preConditions, selectedPreCondition]);
    setSelectedPreCondition('');
  };

  return (
    <form key={key} className="h-full">
      <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-full">
        <div className="flex justify-between mb-5 gap-5">
          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              First name
            </label>
            <input
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="First name"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Middle name
            </label>
            <input
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="Middle name"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-1 text-[12px] font-semibold">
              Last name
            </label>
            <input
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
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
              placeholder="State of origin"
            />
          </div>
        </div>

        <div className="w-full mb-5">
          <label className="flex mb-1 text-[12px] font-semibold">Address</label>
          <input
            type="email"
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
              type="text"
              className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]"
              placeholder="Relationship"
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
            />
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
            <button onClick={(e) => handleAddSelection(e)}  className="bg-[#0B0C7D] text-[#fff] p-3 rounded-xl ">Add Selection</button>
          </div>
        ) : null}

{preConditions.length > 0 && (
          <div className="mt-3">
            <p>Selected Pre-existing Conditions:</p>
            <div className="flex gap-4">
              {preConditions.map((condition, index) => (
                <div key={index} className="bg-[#EDF0F8] rounded-xl p-3">
                  {condition}
                </div>
              ))}
            </div>
          </div>
        )}
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
  );
}

export default DependantForm;
