import { useRouter } from "next/dist/client/router";
import useAuth from "../hooks/auth";

export default function AppLayout({ children }) {
	const auth = useAuth();

	const router = useRouter();

	const logout = () => {
		auth.logout();
		router.replace("/admin/auth/login")
	}
	return (
		children
	);
}