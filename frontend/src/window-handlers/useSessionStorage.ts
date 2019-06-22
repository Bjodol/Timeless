import { useMemo } from "react";

export const useSessionStorage = <T>(key: string) => {
  const value = useMemo(() => {
    if (window && window.sessionStorage) {
      const value = window.sessionStorage.getItem(key);
      if (value) return JSON.parse(value) as T;
    }
  }, [key]);
  const setValue = (value: T) => {
    if (window && window.sessionStorage) {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  };
  return { value, setValue };
};
