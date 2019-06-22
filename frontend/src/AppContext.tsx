import React, { createContext, useState, useContext } from "react";
import { useSessionStorage } from "./window-handlers/useSessionStorage";

export const baseUrl = "http://localhost:8000";

const AppContext = createContext<{
  authToken: string;
  setToken: (token: string) => void;
  baseUrl: string;
}>({ authToken: "", setToken: () => {}, baseUrl: baseUrl });

interface IAppContextProviderProps {}

const AppContextProvider: React.FunctionComponent<IAppContextProviderProps> = ({
  children
}) => {
  const { setValue, value } = useSessionStorage<string>("authToken");
  const [token, setTokenReact] = useState<string>(value || "");
  const setToken = (token: string) => {
    setValue(token);
    setTokenReact(token);
  };
  return (
    <AppContext.Provider
      value={{
        authToken: token,
        setToken,
        baseUrl: baseUrl
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAuthToken = () => {
  const { authToken, setToken } = useContext(AppContext);
  return { authToken, setToken };
};

export const useBaseUrl = () => {
  const { baseUrl } = useContext(AppContext);
  return baseUrl;
};

export default AppContextProvider;
