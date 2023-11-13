import { authAPI, noAuthAPI } from "@/config/axios";


const InsurerService = {

	register: async (first_name, last_name, email, password, company, industry) => {
        const response = await noAuthAPI.post("auth/signup", {
			first_name,
			last_name,
            email,
            password,
			company,
			industry
        });

        return response
	},

	

	login: async (email, password) => {
		const response = await noAuthAPI.post("/insurer/login.php", {
            email,
            password
        });

		return response;
	},


    createOrganization: async (organization_id, organization_name, first_name, last_name, email) => {
        const response = await authAPI.post("/insurer/add_organisation.php", {
			insurer_id: JSON.parse(localStorage.getItem("plateaumed_insurer_user")).id,
			organization_id: organization_id,
			organization_name: organization_name,
			organization_contact_first_name: first_name,
			organization_contact_last_name: last_name,
			organization_contact_email: email
		});
        return response;
	},


	// listOrganization: async () => {
	// 	const response = await authAPI.post("/insurer/companies.php");

	// 	return response;
	// },

	listOrganization: async (id) => {
		const response = await authAPI.get(`/insurer/companies.php?insurer_id=${id}`);
		return response;
	},


	fetchOrganization: async (id) => {
		const response = await authAPI.get(`/insurer/companyById.php?id=${id}`);
		return response;
	},


	verifyEmail: async (token, email) => {
        const response = await noAuthAPI.post("auth/verify-email", {
            token,
			email
        });
        return response
	},
	

	

	// sendVerificationEmail() {
    //     // return sendEmailVerification(this.auth.currentUser)
	// 	// 	.then((userCredential) => {
	// 	// 		console.log(userCredential);
	// 	// 		return {
	// 	// 			user: userCredential
	// 	// 		} 
	// 	// 	})
	// 	// 	.catch((error) => {
	// 	// 		alert(error.message)
	// 	// 		return {
	// 	// 			error: error.message
	// 	// 		};
	// 	// 	})
    // },


	

	logout: async () =>  {
		const response = await noAuthAPI.get("auth/logout");
        return response;
	}
}


export default InsurerService;