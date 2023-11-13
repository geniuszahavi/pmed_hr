import { PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import building from "@/assets/building.png";
import { SmallButton } from "..";
import Image from "next/image";
import { useState } from "react";
import InsurerService from "@/services/InsurerService";
import { useFormik } from "formik";
import { object, string } from "yup";
import AuthService from "@/services/AuthService";
import toast, { Toaster } from "react-hot-toast";


function AddInsurerModal({ visible, closeModal }) {
    const [disabled, setDisabled] = useState(false);

    let userSchema = object({
        organization: string().min(3, "Organization name must be at least 8 characters long").required("Organization is required"),
        first_name: string().min(3, "First name must be at least 8 characters long").required("Contact Person First Name is required"),
        last_name: string().min(3, "Last name must be at least 8 characters long").required("Contact Person Last Name is required"),
        email: string().email().trim().required("Contact person Email is required"),
    });


    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
          organization: "",
          first_name: "",
          last_name: "",
          email: ""
        },
        validationSchema: userSchema,
    });

    const addInsurer = async (event) => {
        event.preventDefault()
        console.log("Testing....");
        setDisabled(true);
        try {
            console.log("Logining........");
            const response = await InsurerService.createInsurer(values.organization, values.first_name, values.last_name, values.email);
            console.log(response);
            toast.success(response.data.message);
            setDisabled(false);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            //actions.setSubmitting(false)
            setDisabled(false);
        }
    }

    return (
        <div className={`${visible ? "bg-[#EDF0F8] fixed top-0 w-full h-full py-[16px] px-[32px]" : "hidden"}`}>
            <Toaster />

            <div className="mb-8 flex justify-between items-center">
                <h4 className="text-[18px] text-[#051438] font-semibold">Add insurer</h4>
                <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={closeModal}>
                    <XIcon className="w-5 h-5" />
                </button>
            </div>

            <form className="h-full" onSubmit={addInsurer}>
                <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-[512px]">
                    <div className="flex gap-5 w-full items-center border-b border-[#DFE2E9] pb-4 mb-4">
                        <div>
                            <Image src={building} width="72" height="" alt="" />
                        </div>
                        <div className="w-full">
                            <label className="flex mb-1">Insurer name</label>
                            <input type="text" name="organization" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                            placeholder="Enter organization name" onChange={handleChange} onBlur={handleBlur} value={values.organization} />
                        </div>
                    </div>

                    <div className="flex justify-between mb-5 gap-5">
                        <div className="w-full">
                            <label className="flex mb-1 text-[12px] font-semibold">Contact person first name</label>
                            <input type="text" name="first_name" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                            placeholder="Enter first name" onChange={handleChange} onBlur={handleBlur} value={values.first_name} />
                        </div>

                        <div className="w-full">
                            <label className="flex mb-1 text-[12px] font-semibold">Contact person last name</label>
                            <input type="text" name="last_name" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                            placeholder="Enter last name" onChange={handleChange} onBlur={handleBlur} value={values.last_name} />
                        </div>
                    </div>

                    <div className="w-full mb-5">
                        <label className="flex mb-1 text-[12px] font-semibold">Contact person email address</label>
                        <input type="text" name="email" className="w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                        placeholder="Enter email address" onChange={handleChange} onBlur={handleBlur} value={values.email} />
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

export default AddInsurerModal;