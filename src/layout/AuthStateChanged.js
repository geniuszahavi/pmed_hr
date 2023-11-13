import React, { useEffect, useState } from "react";
import useAuth from "../hooks/auth";
import AuthService from "../services/AuthService";
//import { useJwt } from "react-jwt";
import ClipLoader from "react-spinners/ClipLoader";
const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};

//const token = typeof window !== "undefined" ? window.localStorage.getItem("rythinkAuth") : false

export default function AuthStateChanged({ children }) {
	const { setUser } = useAuth();
	const [loading, setLoading] = useState(true);
	const [color, setColor] = useState("#ffffff");

	useEffect(() => {
		AuthService.waitForAuthorization((userCredential) => {
			console.log(userCredential);
			if(userCredential === "Request failed with status code 400") {
				setUser(null)
				setLoading(false);
			} else {
				setUser(userCredential);
				setLoading(false);
			}
			
		});
		
	}, [setUser]);

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<ClipLoader
                	color={color}
                    loading={loading}
                    cssOverride={override}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
        		/>
			</div>
		);

		
	}

	return children;
}