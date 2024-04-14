import { useState } from "react";
import { SupplierSignUpData } from "../AuthApi/Api";
import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";


const useSign = () => {
  const [newData, setNewData] = useState({
    CompanyName: "",
    PhoneNumber: "",
    Email: "",
    RegistrationNumber: "",
    PanNumber: "",
    PanCertificate: null,
    NewDate: "",
    Address: "",
    CompanyCategory: "",
    CompanyDocumentVerification: null,
    Password: "",
  });

  

  
  

  const handleCompanyName = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  const handlePhoneNumber = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  const handleRegistrationNumber = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  const handlePanNumber = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  const handlePanCertificate = async (e) => {
    const file = e.target.files[0];
    const PanCertificate = await convertToBase64(file);
    const imageUrl = PanCertificate.slice(22, PanCertificate.length);
    console.log({ imageUrl });
    setNewData((prev) => ({ ...newData, PanCertificate: [imageUrl] }));
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const filereader = new FileReader();
      filereader.readAsDataURL(file);

      filereader.onload = () => {
        resolve(filereader.result);
      };
      filereader.onerror = () => {
        reject(error);
      };
    });
  };

  const handleNewDate = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  const handleAddress = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  const handleCompanyCategory = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  const handleCompanyDocumentVerification = async (e) => {
    const file = e.target.files[0];
    const CompanyDocumentVerification = await convertToBase64(file);
    const imageUrl = CompanyDocumentVerification.slice(
      22,
      CompanyDocumentVerification.length
    );
    console.log({ imageUrl });
    setNewData((prev) => ({
      ...newData,
      CompanyDocumentVerification: [imageUrl],
    }));
  };

  const createMutatioFunction = useMutation({
    mutationFn: SupplierSignUpData,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["load"] });
      console.log("sucess");
      alert("your company is register");
      setIsCreated(true);
    },
  });

  const handlePassword = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  

  return {
    handleCompanyName,
    handleAddress,
    // handleSubmit,
    handleCompanyCategory,
    handleEmail,
    handlePhoneNumber,
    handlePanNumber,
    handleNewDate,
    handlePanCertificate,
    handleCompanyDocumentVerification,
    handleRegistrationNumber,
    handlePassword,
    // isCreated,
    createMutatioFunction, 
    newData
  };
};

export default useSign;
