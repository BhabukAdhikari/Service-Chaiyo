import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { SupplierOtp } from "../AuthApi/Api";

const useOtp = () => {
  const [enteredOtp, setEnteredOtp] = useState({
    OTP: null,
  });
  const [isCreated , setIsCreated]= useState(false);
  const createMutation = useMutation({
    mutationFn: SupplierOtp,
  });

  const handleOtp = (e) => {
    const value = e.target.value;
    setEnteredOtp({
      ...enteredOtp,
      [e.target.name]: value,
    });
  };



  return { handleOtp, createMutation , enteredOtp  ,setIsCreated , isCreated};
};

export default useOtp;
