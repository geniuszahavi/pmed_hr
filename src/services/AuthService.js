import { authAPI, noAuthAPI } from "@/config/axios";
import api from "@/config/axios";


const AuthService = {
	waitForAuthorization: async (callback) => {
		try {
            const response = JSON.parse(localStorage.getItem("plateaumed_hr_user"))
            console.log(response);
            callback(response);
        } catch (error) {
			console.log(error);
			callback(error?.message);
        }
	},



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
		const response = await noAuthAPI.post("/hr/login.php", {
            email,
            password
        });

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


export default AuthService;