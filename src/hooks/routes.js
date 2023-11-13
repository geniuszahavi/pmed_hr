"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { useCookies } from 'react-cookie';
import useAuth from "@/hooks/auth";
import { hasCookie, getCookie } from "cookies-next";


const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};




export function withPublic(WrappedComponent) {
	return function WithPublic({...props}) {
	  const router = useRouter();
	  const auth = useAuth();
	  let value = null;
	  if (typeof window !== "undefined") {
		const obj = localStorage.getItem("plateaumed_hr")
		value = obj;
		console.log(value);
	  }

	  console.log(value);

	  if (value) {
		router.replace("/dashboard/staff");
		return (
			<div className="h-screen min-h-screen flex items-center justify-center">
				<ClipLoader
					color="white"
					loading={true}
					cssOverride={override}
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		);
	 }
	  // If this is an accessToken we just render the component that was passed with all its props
		return <WrappedComponent auth={auth} {...props} />;
	};
} 

export function withProtected(WrappedComponent) {
  return function WithProtected({...props}) {
	const router = useRouter();
	const auth = useAuth();

	let value = null;
	if (typeof window !== "undefined") {
		const obj = localStorage.getItem("plateaumed_hr")
		value = obj;
		console.log(value);
	}

	if (!value) {
		if (typeof window !== "undefined") {
			localStorage.removeItem("plateaumed_hr")
		}
		router.replace("/auth/login");
		return (
			<div className="h-screen min-h-screen flex items-center justify-center">
				<ClipLoader
					color="white"
					loading={true}
					cssOverride={override}
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		);
	 }

      // If this is an accessToken we just render the component that was passed with all its props
      return <WrappedComponent auth={auth} {...props} />;
	}
};