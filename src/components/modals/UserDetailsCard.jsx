import { XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import { Success } from "..";
function UserDetailsCard({ visible, company, staff, id, closeDetails }) {
  const selectedStaff = staff?.staff_members?.find((item) => {
    return item.staff_id === id;
  });
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const handlePrint = () => {
    window.print()
    setOpenModal(true)
  };

  return (
    <div
      className={`${
        visible
          ? "bg-[#EDF0F8] fixed top-0 w-full h-full py-[16px] text-[#000] px-[45px] z-[1111111] bg-cover bg-center bg-no-repeat "
          : "hidden"
      }`}
    >
      <Success
        visible={openModal}
        closeModal={() => setOpenModal(false)}
        title={"Physical ID cards generated successfully!"}
        description={"Physical ID cards  format have been updated"}
      />
      <div className="mb-8 flex justify-between items-center">
        <h2 className="font-bold text-2xl">Generate Physical Card</h2>

        <button
          className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]"
          onClick={() => closeDetails && closeDetails()}
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col items-end bg-[#fff] h-[60vh] p-8 rounded-xl mt-8">
        {selectedStaff && (
          <div className="border-xl w-[35%]  m-auto p-4  border details  ">
            <div className="flex items-center gap-4">
              <img
                src={
                  selectedStaff?.profile_image_filename
                    ? `https://api.coderigi.co/staff/uploads/${selectedStaff.profile_image_filename}`
                    : `https://res.cloudinary.com/dj3zrsni6/image/upload/v1700219287/samples/avatar-1_hxeiex.png`
                }
                className="w-44"
                alt=""
              />
              <div className="flex flex-col gap-6 w-full">
                <div className="block">
                  <h2>Enrolee name</h2>
                  <h2 className="font-bold text-[18px]">
                    {selectedStaff?.first_name || "Not set"}{" "}
                    {selectedStaff?.first_name}{" "}
                  </h2>
                </div>

                <div className="flex justify-between w-full">
                  <div className="block">
                    <p>Other details</p>
                    <div className="flex  gap-2 divide-x divide-black">
                      <p className="font-bold">
                        {selectedStaff?.dob || "40yr"}
                      </p>
                      {/* <hr className="w-12" /> */}
                      <p className="pl-3 font-bold">{selectedStaff.gender}</p>
                    </div>
                  </div>
                  <div className="block">
                    <p>Staff id</p>
                    <p className="font-bold">{selectedStaff.staff_id}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <div className="block">
                <p>insurance ID</p>
                <p className="font-bold">{selectedStaff?.insurance_id}</p>
              </div>
              <div className="block">
                <p>Plan</p>
                <p className="font-bold">{selectedStaff?.plan}</p>
              </div>
              <div className="block">
                <p>Effective until</p>
                <p className="font-bold">
                  {selectedStaff?.date || "Not Available"}
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <div className="block">
                <p>Company Name</p>
                <p className="font-bold">{company?.organization_name}</p>
              </div>
              <div className="block">
                <img
                  src="https://res.cloudinary.com/dj3zrsni6/image/upload/v1700221714/samples/Rectangle_827511_qirny8.png"
                  className="w-44 h-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end mt-7">
        <button
          className="bg-[#0B0C7D] px-9 py-5 rounded-2xl ml-auto text-[#fff] text-lg font-semibold"
          onClick={handlePrint}
        >
          {" "}
          Generate
        </button>
      </div>
    </div>
  );
}

export default UserDetailsCard;
