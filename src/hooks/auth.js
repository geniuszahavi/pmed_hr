import { createContext, useContext, useState } from "react";
import AuthService from "../services/AuthService";

const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	const loginWithGoogle = async () => {
		const { error, user } = await AuthService.loginWithGoogle();
		setUser(user ?? null);
		setError(error ?? "");
	};


	const sendVerificationEmail = async () => {
		setLoading(true);
        const { error, user } = await AuthService.sendVerificationEmail();
        setUser(user ?? null);
        setError(error ?? undefined);
		user && setLoading(false)
		error && setLoading(false);
    };

	const updateUserProfile = async (name) => {
		setLoading(true);
        const { error, user } = await AuthService.updateUserProfile(name);
        setUser(user ?? null);
        setError(error ?? undefined);
		user && setLoading(false)
		error && setLoading(false)
    };

	const logout = async () => {
		await AuthService.logout();
		setUser(null);
	};
	const value = { user, error, loading, loginWithGoogle, 
		sendVerificationEmail, updateUserProfile, logout, setUser, setError };

	return <authContext.Provider value={value} {...props} />;
}