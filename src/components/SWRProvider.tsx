"use client";
import axios from "axios";
import { FC } from "react";
import { SWRConfig } from "swr";

const SWRProvider: FC<SWRProviderProps> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: async (url, params) => {
          const res = await axios.get(url, { params });
          return res.data;
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

interface SWRProviderProps {
  children: React.ReactNode;
}

export default SWRProvider;
