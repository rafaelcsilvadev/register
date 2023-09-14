"use client";

import { STORAGE_KEY_AUTH_TOKEN } from "@/constants/localStorage";
import { ROUTES_SIGN_IN, ROUTES_CMS_MENU } from "@/constants/routes";
import { useRouter } from "next/navigation";
import {
  createContext,
  FC,
  ReactNode,
  useLayoutEffect,
  useMemo,
} from "react";


interface PropsAuthProvider {
  children: ReactNode;
}

interface DefaultValue {}

const DEFAULT_VALUE: DefaultValue = {};

const AuthContext = createContext<DefaultValue>(DEFAULT_VALUE);

const AuthProvider: FC<PropsAuthProvider> = ({ children }) => {
  const router = useRouter();

  useLayoutEffect(() => {
    const token = localStorage.getItem(STORAGE_KEY_AUTH_TOKEN);

    if (!token) {
      router.push(ROUTES_SIGN_IN);
    } else {
      router.push(ROUTES_CMS_MENU);
    }
  });

  const value: DefaultValue = useMemo(() => {
    return {};
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
