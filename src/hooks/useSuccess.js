import { useState, useEffect } from "react";

const useSuccess = (active) => {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
    if(active) {
        setTimeout(() => {
            setIsActive(false)
        }, 5000);
    }
  }, [active]);

  return [isActive]
};

export default useSuccess;