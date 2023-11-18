import { SmallButton } from "..";
import { useFormik } from "formik";
import { object, string } from "yup";
import toast, { Toaster } from "react-hot-toast";


function PrimaryEnrolleeForm({ enrollee }) {

    console.log("primary enrolee modal", enrollee)
    let userSchema = object({
        gender: string().min(3, "Organization name must be at least 8 characters long").required("Organization is required"),
        dob: string().min(3, "First name must be at least 8 characters long").required("Contact Person First Name is required"),
        first_name: string().min(3, "Last name must be at least 8 characters long").required("Contact Person First Name is required"),
        middle_name: string().min(3, "Middle name must be at least 8 characters long").required("Contact Person Middle Name is required"),
        last_name: string().min(3, "Last name must be at least 8 characters long").required("Contact Person Last Name is required"),
        email: string().email().trim().required("Contact person Email is required"),
        phone: string().trim().required("Contact person phone is required"),
        nationality: string().trim().required("Contact person Nationality is required"),
        sor: string().trim().required("Contact person State of Origin is required"),
        address: string().trim().required("Contact person address is required"),
        insurance_id: string().trim().required("Contact person Insurance ID is required"),
        job_title: string().trim().required("Job title is required"),
        level: string().trim().required("Level is required"),
        staff_id: string().trim().required("Staff ID is required"),
    });


    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
          gender: "",
          dob: "",
          first_name: "",
          middle_name: "",
          last_name: "",
          email: "",
          phone: "",
          nationality: "",
          sor: "",
          address: "",
          insurance_id: "",
          job_title: "",
          level: "",
          staff_id: ""
        },
        validationSchema: userSchema,
    });

    const editStaff = async (event) => {
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
        <form className="h-full">
            <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-[512px]">
                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">First name {enrollee?.first_name}</label>
                        <input type="text" name="first_name" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                        onChange={handleChange} onBlur={handleBlur} defaultValue={enrollee?.first_name} />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Middle name</label>
                        <input type="text" name="middle_name" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                        onChange={handleChange} onBlur={handleBlur}  defaultValue={enrollee?.middle_name} />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Last name {enrollee?.last_name}</label>
                        <input type="text" name="last_name" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                        onChange={handleChange} onBlur={handleBlur} defaultValue={enrollee?.last_name} />
                    </div>
                </div>

                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Gender</label>
                        <input type="text" name="gender" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" disabled defaultValue={enrollee?.gender} />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Date of Birth</label>
                        <input type="date" name="dob" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white"
                        onChange={handleChange} onBlur={handleBlur} defaultValue={enrollee?.dob} />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Phone number</label>
                        <input type="tel" name="phone" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" placeholder="Enter organization phone"
                        onChange={handleChange} onBlur={handleBlur} defaultValue={enrollee?.phone_number} />
                    </div>
                </div>


                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Email address</label>
                        <input type="email" name="email" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" disabled defaultValue={enrollee?.email} />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Nationality</label>
                        <input type="text" name="nationality" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                        onChange={handleChange} onBlur={handleBlur} defaultValue={enrollee?.nationality} />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">State of Origin</label>
                        <input type="text" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                        onChange={handleChange} onBlur={handleBlur} defaultValue={enrollee?.state_of_origin} />
                    </div>
                </div>


                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-[68%]">
                        <label className="flex mb-1 text-[12px] font-semibold">Address</label>
                        <input type="text" name="address" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" 
                        onChange={handleChange} onBlur={handleBlur} defaultValue={enrollee?.address} />
                    </div>

                    <div className="w-[33%]">
                        <label className="flex mb-1 text-[12px] font-semibold">Insurance ID</label>
                        <input type="text" name="insurance_id" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white" 
                        onChange={handleChange} onBlur={handleBlur} defaultValue={enrollee?.insurance_id} />
                    </div>
                </div>

                <div className="flex justify-between mb-5 gap-5">
                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Job title</label>
                        <input type="text" name="job_title" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" disabled defaultValue={enrollee?.job_title} />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Level</label>
                        <input type="text" name="level" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" disabled defaultValue={enrollee?.level} />
                    </div>

                    <div className="w-full">
                        <label className="flex mb-1 text-[12px] font-semibold">Staff ID</label>
                        <input type="text" name="staff_id" className="text-[#051438] w-full py-[14px] px-[20px] rounded-[10px] border border-[##DFE2E9] bg-white disabled:bg-[#DFE2E9]" disabled defaultValue={enrollee?.staff_id_number} />
                    </div>
                </div>
                
            </div>
            <div className="flex justify-end">
                <SmallButton text="Save all changes" type="submit" />
            </div>
        </form>
    );
}

export default PrimaryEnrolleeForm;