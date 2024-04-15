import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { ServiceData } from "../DashApi/Api";
import { QueryClient } from "@tanstack/react-query";

const useModal = () => {
  const [serviceInput, setServiceInput] = useState({
    serviceName: "",
    price: 0,
    availability: null,
    notavailability: null,
    description: "",
    serviceImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceImage = async (e) => {
    const file = e.target.files[0];
    try {
      const ServiceImage = await convertToBase64(file);
      const imageUrl = ServiceImage.slice(22);
      setServiceInput((prev) => ({ ...prev, serviceImage: imageUrl }));
    } catch (error) {
      console.error("Error converting to base64:", error);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const filereader = new FileReader();
      filereader.readAsDataURL(file);

      filereader.onload = () => {
        resolve(filereader.result);
      };
      filereader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const createMutationFunction = useMutation({
    mutationFn: ServiceData, 
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["serviceData"] });
      console.log("success");
    },
    onError: (error) => {
      console.error("Error adding service:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutationFunction.mutate(serviceInput);
    alert("Added successfully");
  };

  return {
    handleChange,
    handleServiceImage,
    handleSubmit
  };
};

export default useModal;
