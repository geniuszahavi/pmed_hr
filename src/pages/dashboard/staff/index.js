import { AddOrganizationModal, EnrolleeRow, Logout, OrganizationRow, OrganizationUserRow, SmallButton, SmatNav, Success, UploadStaffDetailModal } from "@/components";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, SortDescendingIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { withProtected } from "@/hooks/routes";
import InsurerService from "@/services/InsurerService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import icon from "@/assets/insurer-icon.png"
import axios from "axios";
import useLogOut from "@/hooks/useLogout";


function Enrolment({ auth }) {
    const router = useRouter();
    const [setLogOut] = useLogOut();
    const { setUser, user } = auth;
    const [openModal, setOpenModal] = useState(false);
    const [openSignOut, setOpenSignOut] = useState(false);
    const [openSuccess, setOpenSuccessModal] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [staffs, setStaffs] = useState(null);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [enrollee, setEnrollee] = useState(null);

    const [uploadProgress, setUploadProgress] = useState(0);
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(false);
  

    useEffect(() => {
        listStaffs()
    },[])

    const listStaffs = async () => {
        setDisabled(true);
        try {
            const response = await InsurerService.listStaff(JSON.parse(localStorage.getItem("plateaumed_hr_user")).insurer_id);
            console.log(response);
            setStaffs(response.data)
            setDisabled(false);
        } catch (error) {
            setDisabled(false);
            console.log(error);
        }
    }
    useEffect(() => {
        let interval;
    
        if (uploadProgress > 0 && uploadProgress < 100) {
          interval = setInterval(() => {
            setUploadProgress((prevProgress) => Math.min(prevProgress + 1, 100));
          }, 100);
          setSaveButtonDisabled(true);
        } else {
          clearInterval(interval);
          setSaveButtonDisabled(false);
        }
    
        return () => clearInterval(interval);
      }, [uploadProgress]);
    
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setUploadProgress(1);
      };
    
      const handleUpload = async (e) => {
        e.preventDefault();
        if (file) {
      
          try {
            let formData = new FormData();
            formData.append("file", file);
            formData.append("organization_id", JSON.parse(localStorage.getItem("plateaumed_hr_user")).insurer_id);
            const response = await axios.post(
              "https://api.coderigi.co/hr/add.php",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                  const percentage = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                  );
                  setUploadProgress(percentage);
                },
              }
            );
            console.log(response)

            if (response.data?.message) {
                setOpenModal(false);
                setFile(null);
                setOpenSuccessModal(true);
                listStaffs();
              }
            
          } catch (e) {
            console.error(e);
          const error =
            e.response && e.response.data
              ? e.response.data.error
              : "Sorry! something went wrong.";
          console.log(error);
          }
        }
      };
    // const uploadFile = async (e) => {
    //     e.preventDefault();
      
    //     if (!file) {
    //       return;
    //     }
      
    //     try {
    //       let formData = new FormData();
    //       formData.append("file", file);
    //       formData.append("organization_id", JSON.parse(localStorage.getItem("plateaumed_hr_user")).insurer_id);
            
    //       const response = await axios.post("https://api.coderigi.co/hr/add.php", formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //           },
    //       });
      
    //       console.log("File was uploaded successfully:", response);
      
    //       if (response.data?.message) {
    //         setOpenModal(false);
    //         setFile(null);
    //         setOpenSuccessModal(true);
    //         listStaffs();
    //       }
      
    //     } catch (e) {
    //       console.error(e);
    //       const error =
    //         e.response && e.response.data
    //           ? e.response.data.error
    //           : "Sorry! something went wrong.";
    //       console.log(error);
    //     }
    //   }
      


    const openEnrollee = (enrollee) => {
        setEnrollee(enrollee);
        console.log(enrollee);
        router.push(`/dashboard/staff/${enrollee.staff_id}`)
    }


    return (
        <>
            <main className="bg-[#EDF0F8] h-screen">
                <UploadStaffDetailModal disabled={saveButtonDisabled} uploadFile={handleUpload}  progress ={uploadProgress} file={file} onFileChange={handleFileChange} visible={openModal} closeModal={() => setOpenModal(false)} />
                <Success visible={openSuccess} title="Staff list submitted successfully!" description="Your staff list has been submitted to Smathealth Medicare Limited"
                    closeModal={() => setOpenSuccessModal(false)} />
                <SmatNav name={user?.organization_contact_first_name} openSignOut={() => setOpenSignOut(true)} />
                <Logout visible={openSignOut} closeModal={() => setOpenSignOut(false)} logout={() => { setLogOut(true);  setOpenSignOut(false) }}  />
                <section className="m-[32px]">
                    

                    <div className="flex justify-between items-center mb-8">
                        <h5 className="text-[#051438] text-[18px] font-semibold">Staff management</h5>

                        {!disabled && staffs?.staff_members?.length > 0 && <div className="bg-[#DFE2E9] py-[8px] px-[16px] flex gap-7 justify-between items-center rounded-[10px]">
                            <div className="flex flex-col  items-center">
                                <span className="text-[#051438] text-[16px] font-semibold">{ staffs?.staff_members.length}</span>
                                <span className="text-[#677597] text-[14px] font-semibold">Total staff enrolled</span>
                            </div>
                            <div className="flex flex-col  items-center">
                                <span className="text-[#051438] text-[16px] font-semibold">{ staffs?.incomplete_setup }</span>
                                <span className="text-[#677597] text-[14px] font-semibold">Enrollees with info completed</span>
                            </div>

                            <div className="flex flex-col  items-center">
                                <span className="text-[#051438] text-[16px] font-semibold">{ staffs?.total_dependents }</span>
                                <span className="text-[#677597] text-[14px] font-semibold">Total dependants</span>
                            </div>
                        </div>}


                        <div className="flex items-center gap-8">
                            <div className="flex gap-3 items-center bg-white border border-[#DFE2E9] rounded-[10px]  pr-[20px]">
                                <input type="text" id="search" name="search" className="w-full py-[10px] pl-[20px] rounded-l-[10px]" placeholder="Search list" />
                                <SearchIcon className="h-5 w-5" />
                            </div>
                            <SmallButton text="Upload staff details" onClick={() => setOpenModal(true)} />
                        </div>
                    </div>


                    { !disabled && staffs?.staff_members?.length == 0 && <div className="h-[540px] flex justify-center items-center overflow-scroll">
                        <div className="bg-white rounded-[10px] border border-[#DFE2E9] p-[16px] flex flex-col justify-center items-center h-[360px] w-[640px]">
                            <Image src={icon} width="120" height="" alt="" className="mb-8" />
                            <p className="text-[#677597] text-[16px] mb-2">No data recorded</p>
                            <p className="text-[#051438] text-[16px] font-medium">Click on the Upload staff details button to get started</p>
                        </div>
                    </div> }

                    { !disabled && staffs == null && <div className="h-[550px] flex justify-center items-center">
                        <span class="spinner"></span>
                    </div> }

                    { !disabled && staffs?.staff_members?.length > 0 && <div className="h-[582px]">
                        <div>
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex gap-1 items-center">
                                    <SortDescendingIcon className="h-5 w-5 text-[#0B0C7D]" />
                                </div>

                                <div className="flex gap-6 items-center">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-[#677597] text-[16px] font-medium">
                                            <span>1 - 20</span>
                                        </p>
                                        <span className="text-[#051438] text-[16px] font-medium">of</span>
                                        <span className="text-[#677597] text-[16px] font-medium">200</span>
                                    </div>

                                    <div className="flex gap-3 items-center">
                                        <button className="flex justify-center items-center bg-white disabled:bg-[#E6E8EB] border border-[#DFE2E9] rounded-[4px] h-[32px] w-[32px]" disabled>
                                            <ChevronLeftIcon className="h-4 w-4" />
                                        </button>
                                        <button className="flex justify-center items-center bg-white disabled:bg-[#E6E8EB] border border-[#DFE2E9] rounded-[4px] h-[32px] w-[32px]">
                                            <ChevronRightIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>

                                <ul className="flex justify-between">
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Enrollee information
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Contact information
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Job information
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Preferred provider
                                    </li>
                                    <li className="px-6 py-3 text-[16px] text-[#A6AFC2] font-semibold">
                                        Plan information
                                    </li>
                                </ul>

                                <div className="">
                                    <EnrolleeRow enrollees={ staffs?.staff_members } openPlan={openEnrollee} />
                                </div>


                            </div>

                        </div>
                    </div>}

                </section>
            
            </main>
        </>
    );
}

export default withProtected(Enrolment);