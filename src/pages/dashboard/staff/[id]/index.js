import {
  Dependant,
  EditEnrolleeModal,
  EnrolleeInfo,
  Logout,
  SmallButton,
  SmatNav,
  Success,
} from "@/components";
import {
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import useLogOut from "@/hooks/useLogout";
import { withProtected } from "@/hooks/routes";
import { useRouter } from "next/router";
import axios from "axios";
import InsurerService from "@/services/InsurerService";
import { FaAngleDown } from "react-icons/fa";
import UserDetailsCard from "@/components/modals/UserDetailsCard";
import Link from "next/link";
import Menu from "@/components/popup/Menu";

function OrganizationStaffSingle({ auth }) {
  const router = useRouter();
  const { id } = router.query;
//   const enrolleeId = id;
  console.log({ id });
  const { setUser, user } = auth;
  const [setLogOut] = useLogOut();
  const [openModal, setOpenModal] = useState(false);
  const [openEnrolleeModal, setOpenEnrolleeModal] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [staffs, setStaffs] = useState(null);
  const [company, setCompany] = useState([])

  useEffect(() => {
    listStaffs()
    // getCompany()
    getCompany().then((result) => {
      console.log('Data from the resolved promise:', result);
    }).catch((error) => {
      console.error('Error from the resolved promise:', error);
    });
  }, []);

  console.log({ staffs });
  const listStaffs = async () => {
    setDisabled(true);
    try {
      const response = await InsurerService.listStaff(
        JSON.parse(localStorage.getItem("plateaumed_hr_user")).insurer_id
      );
      console.log(response);
      setStaffs(response.data);
      setDisabled(false);
    } catch (error) {
      setDisabled(false);
      console.log(error);
    }
  };
  const getCompany = async () => {
    try {
      const response = await axios.get(`https://api.coderigi.co/staff/companyName.php?staff_id=${6996}`);
      const data = response.data;
      console.log(data);
      setCompany(data);
      return data
    } catch (error) {
      console.error(error);
     
      throw error
    }
  };

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const closeDropdown = () => {
      setIsOpen(false);
    };
 
const first_name = staffs?.staff_members?.map((item)=> {return item?.first_name})
const middle_name = staffs?.staff_members?.map((item)=> {return item?.middle_name})
const last_name = staffs?.staff_members?.map((item)=> {return item?.last_name})

const username = first_name + ' '+ middle_name + " " + last_name
console.log(company)
  return (
    <>
      <main className="bg-[#EDF0F8] h-screen">
        <Success visible={openModal} closeModal={() => setOpenModal(false)} />
        <EditEnrolleeModal visible={openEnrolleeModal} closeModal={() => setOpenEnrolleeModal(false)}
         enrollee={staffs}
           />

        <SmatNav
          name={user?.organization_contact_first_name}
          openSignOut={() => setOpenSignOut(true)}
        />
        <Logout
          visible={openSignOut}
          closeModal={() => setOpenSignOut(false)}
          logout={() => {
            setLogOut(true);
            setOpenSignOut(false);
          }}
        />

        <section className="p-[32px] ">
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2 items-center">
              <Link href={'/dashboard/staff'}>
              <ChevronLeftIcon className="h-5 w-5 text-[#051438]" />
              </Link>
              <h5 className="text-[#677597] text-[16px] font-semibold">
                Staff enrolment details
              </h5>

              <ChevronDoubleRightIcon className="h-5 w-5 text-[#051438]" />

              <h5 className="text-[#051438] text-[16px] font-semibold">{username}</h5>
            </div>
          <div className="flex gap-5">

      


            <SmallButton
              text="Edit enrollee info"
              onClick={() => setOpenEnrolleeModal(true)}
            />
          </div>

          </div>

        

          <div className="bg-white p-[16px] rounded-[10px] mb-5">
            <div className="w-full flex gap-3 justify-between items-center mb-3">
              <span className="text-[#A6AFC2] font-bold text-[16px]">
                Primary enrollee
              </span>
              <span className="w-[88%] h-[1px] flex bg-[#DFE2E9]"></span>
            </div>

            <div className="grid grid-cols-3">
              {staffs?.staff_members.map((item) => (
                <>
                  <EnrolleeInfo title="First name" text={item.first_name} />
                  <EnrolleeInfo title="Middle name" text={item.middle_name} />

                  <EnrolleeInfo title="Last name" text={item?.last_name} />

                  <EnrolleeInfo title="Gender" text={item?.gender} />

                  <EnrolleeInfo title="Date of Birth" text={item.dob} />

                  <EnrolleeInfo
                    title="Phone number"
                    text={item?.phone_number}
                  />

                  <EnrolleeInfo title="Email address" text={item?.email} />
                  <EnrolleeInfo title="Nationality" text={item.nationality} />

                  <EnrolleeInfo
                    title="State of origin"
                    text={item?.state_of_origin}
                  />

                  <EnrolleeInfo title="Address" text={item?.address} />

                  <EnrolleeInfo title="Job title" text={item?.job_title} />

                  <EnrolleeInfo title="Level" text={item.level} />

                  <EnrolleeInfo title="Staff ID" text={item?.staff_id} />

                  <EnrolleeInfo
                    title="Preferred hospital"
                    text="Ivory Specialist Hospital Maternity, Ariaria, Abia"
                  />

                  <EnrolleeInfo title="Plan" text={item?.plan} />

                  <EnrolleeInfo
                    title="Pre-existing conditions"
                    text={item?.pre_conditions}
                  />

                  <EnrolleeInfo title="Insurance ID" text="ATL126575553" />

                  <EnrolleeInfo title="Signature" text={item?.signature} />
                </>
              ))}
            </div>
          </div>
          <div className="bg-white p-[16px] rounded-[10px] w-full">
            <div className="w-full flex gap-12 items-center mb-2">
              <span className="text-[#A6AFC2] font-bold text-[16px]">
                Dependants
              </span>
              <span className="text-[#A6AFC2] font-bold text-[16px]">
                Total dependants: <span>{staffs?.total_dependents}</span>
              </span>
              <span className="w-[60%] h-[1px] flex bg-[#DFE2E9]"></span>
            </div>
            {staffs?.total_dependents !== 0 ? (
              <>
                {staffs?.total_dependents.map(() => (
                  <>
                    <Dependant name="Arthur Tommy Shelby" />
                    <Dependant name="Valerie N'kom Shelby" />
                  </>
                ))}
              </>
            ) : (
              <>
                <Dependant name="No data" />
              </>
            )}
          </div>
        </section>
        <UserDetailsCard 
        id={id}
        company={company}
        staff = {staffs}
        visible={openDetails}
        closeDetails={() => setOpenDetails(false)}
          />
      </main>
    </>
  );
}

export default withProtected(OrganizationStaffSingle);
