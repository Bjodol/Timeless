import { useState, useEffect } from "react";
import { useAuthToken, useBaseUrl } from "../AppContext";

export const useGetRequest = <T>(
  url: string
): { data: T | undefined; isLoading: boolean; error: string } => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<any>(undefined);
  const { authToken } = useAuthToken();
  const baseUrl = useBaseUrl();
  useEffect(() => {
    const dataLoader = async () => {
      try {
        const response = await fetch(`${baseUrl}/api`, {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authToken}`
          },
          redirect: "follow",
          referrer: "no-referrer"
        });
        const data: T = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    };
    dataLoader();
  }, [url]);
  return {
    data,
    error,
    isLoading: data === undefined && error === undefined
  };
};
