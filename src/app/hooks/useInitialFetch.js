import { useEffect, useState } from "react";
import { api } from "../setup/api";

export const useInitialFetch = () => {
    const [data , setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await api.get('/');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
      return {data}
}