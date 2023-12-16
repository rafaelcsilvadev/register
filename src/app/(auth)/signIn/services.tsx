import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES_PROFILE } from "@/constants/routes";

export const useSignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDoSignIn = () => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);

    router.push(ROUTES_PROFILE);
    };

    return {
      email,
      setEmail,
      password,
      setPassword,
      handleDoSignIn,
    };
};
