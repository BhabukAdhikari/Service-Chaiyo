import axios from "axios";

export const ServiceData = async (newData) => {
  try {
    const Posteddata = await axios.post(
      import.meta.env.VITE_SERVICE_DATA,
      newData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = Posteddata.data || [];
    return response;
  } catch (error) {
    console.log("Error occurred:", error);
    throw error;
  }
};

export const ServiceDataReceived = async () => {
  try {
    const Posteddata = await axios.get(import.meta.env.VITE_SERVICE_DATA, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = Posteddata.data || [];
    return response;
  } catch (error) {
    console.log("Error occurred:", error);
    throw error;
  }
};
