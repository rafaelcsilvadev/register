import { FC, ReactNode } from "react";
import AuthProvider from "./authProvider";

interface PropsProviders {
  children: ReactNode;
}

const Providers: FC<PropsProviders> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
