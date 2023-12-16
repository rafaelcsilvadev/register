import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES_SIGN_IN } from "@/constants/routes";

export const useSignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleDoSignUp = () => {
    console.log(`email: ${email}`);
    console.log(`name: ${name}`);
    console.log(`password: ${password}`);
    console.log(`confirmPassword: ${confirmPassword}`);

    router.push(ROUTES_SIGN_IN);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    confirmPassword,
    setConfirmPassword,
    handleDoSignUp,
  };
};
