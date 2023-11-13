import { useState } from "react";
import { PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import building from "@/assets/building.png";
import { SmallButton } from "..";
import Image from "next/image";
import InsurerService from "@/services/InsurerService";
import { useFormik } from "formik";
import { object, string } from "yup";
import AuthService from "@/services/AuthService";
import toast, { Toaster } from "react-hot-toast";
import SmatHealthService from "@/services/InsurerService";



function AddOrganizationModal({ visible, closeModal }) {
    const [disabled, setDisabled] = useState(false);

    let userSchema = object({
        organization_id: string().min(3, "Organization name must be at least 8 characters long").required("Organization is required"),
        organization_name: string().min(3, "First name must be at least 8 characters long").required("Contact Person First Name is required"),
        first_name: string().min(3, "Last name must be at least 8 characters long").required("Contact Person Last Name is required"),
        last_name: string().min(3, "Last name must be at least 8 characters long").required("Contact Person Last Name is required"),
        email: string().email().trim().required("Contact person Email is required"),
    });


    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
          organization_id: "",
          organization_name: "",
          first_name: "",
          last_name: "",
          email: ""
        },
        validationSchema: userSchema,
    });

    const addOrganization = async (event) => {
        event.preventDefault()
        console.log("Testing....");
        setDisabled(true);
        try {
            console.log("Logining........");
            const response = await InsurerService.createOrganization(values.organization_id, values.organization_name,   
                values.first_name, values.last_name, 
                values.email);
            console.log(response);
            toast.success(response.data.message);
            setDisabled(false);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            setDisabled(false);
        }
    }
    return (
        <div className={`${visible ? "bg-[#EDF0F8] fixed top-0 w-full h-full py-[16px] px-[32px] z-[200]" : "hidden"}`}>
            <Toaster  />
            <div className="mb-8 flex justify-between items-center">
                <h4 className="text-[18px] text-[#051438] font-semibold">Add organization</h4>
                <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={closeModal}>
                    <XIcon className="w-5 h-5" />
                </button>
            </div>

            <form className="h-full" onSubmit={addOrganization}>
                <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-[512px]">
                    
                    <div className="flex justify-between mb-5 gap-5">
                        <div className="w-[80%]">
                            <label className="flex mb-1 text-[12px] font-semibold">Organization name</label>
                            <input type="text" name="organization_name" 
                            onChange={handleChange} onBlur={handleBlur} value={values.organization_name} className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" />
                        </div>

                        <div className="w-[20%]">
                            <label className="flex mb-1 text-[12px] font-semibold">Organization ID</label>
                            <input type="number" name="organization_id" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
                             onChange={handleChange} onBlur={handleBlur} value={values.organization_id} />
                        </div>
                    </div>

                    <div className="flex justify-between mb-5 gap-5">
                        <div className="w-full">
                            <label className="flex mb-1 text-[12px] font-semibold">Contact person first name</label>
                            <input type="text" name="first_name" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
                             onChange={handleChange} onBlur={handleBlur} value={values.first_name} />
                        </div>

                        <div className="w-full">
                            <label className="flex mb-1 text-[12px] font-semibold">Contact person last name</label>
                            <input type="text" name="last_name" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                             onChange={handleChange} onBlur={handleBlur} value={values.last_name} />
                        </div>
                    </div>

                    <div className="w-full mb-5">
                        <label className="flex mb-1 text-[12px] font-semibold">Contact person email address</label>
                        <input type="email" name="email" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
                         onChange={handleChange} onBlur={handleBlur} value={values.email} />
                    </div>


                    <button className="flex items-center gap-1 font-bold">
                        <PlusCircleIcon className="h-5 w-5 text-[#0B0C7D]" />
                        <span className="underline font-bold text-[#0B0C7D]">Add another contact</span>
                    </button>
                    
                </div>
                <div className="flex justify-end">
                    <SmallButton text="Save" type="submit" />
                </div>
            </form>

        </div>
    );
}

export default AddOrganizationModal;