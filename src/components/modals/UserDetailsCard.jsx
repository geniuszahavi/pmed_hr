import { PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import building from "@/assets/building.png";
import { SmallButton } from "..";
import Image from "next/image";
import { images } from "@/assets";
import bg_img from "../../assets/bg_card.png";

function UserDetailsCard({ visible, staff, id, closeModal }) {
  console.log(id);
  // const selectedStaff = staff?.staff_members?.find((item) => item.id === id);
  // console.log(selectedStaff)
  const selectedStaff = staff?.staff_members?.find((item) => {
    console.log("item.staff_id:", item.staff_id);
    console.log("id:", id);
    return item.staff_id === id;
  });
  console.log({ selectedStaff });
  return (
    <div
      className={`${
        visible
          ? "bg-[#EDF0F8] fixed top-0 w-full h-full py-[16px] text-[#000] px-[32px] z-[200] bg-cover bg-center bg-no-repeat "
          : "hidden"
      }`}
    >
      <h2>Generate Physical Card</h2>
      <div className="flex bg-[#fff] h-[60vh] p-8 rounded-xl mt-8">
        {selectedStaff && (
          <div className="border-xl w-[50%] h-[30vh] m-auto p-4  border details  ">
            <div className="flex items-center gap-4">
              <img src={selectedStaff?.profile_image} className="w-24" alt="" />
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
            <h2>{selectedStaff.gender}</h2>
            {/* Add other details you want to display */}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDetailsCard;
