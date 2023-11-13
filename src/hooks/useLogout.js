import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const useLogOut = () => {
    const router = useRouter();
  const [logOut, setLogOut] = useState(false);

  useEffect(() => {
    if(logOut && typeof window !== "undefined") {
		localStorage.removeItem("plateaumed_hr");
        localStorage.removeItem("plateaumed_hr_user");
        router.refresh("/auth/login");
    }
  }, [router, logOut]);

  return [setLogOut]
};

export default useLogOut;