'use client'

import { FC, useState } from "react";

import styles from "./style.module.scss";

import Input from "../components/input/input";
import Button from "../components/button/button";
import Title from "../components/title/title";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn: FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDoSignIn = () => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);

    router.push('/profile');
  }

  return (
    <main className={styles["main"]}>
      {/* Creating login custom form */}
      <div className={styles["box-custom-form"]}>
        <Title>Rafa - Register</Title>
        <div className={styles["box-custom-form__div"]}>
          <Input
            type="email"
            value={email}
            onChange={(value) => setEmail(value)}
            placeholder="E-mail"
          />
          <Input
            className="mt-5"
            type="password"
            value={password}
            onChange={(value) => setPassword(value)}
            placeholder="Password"
          />
          <Button onClick={() => handleDoSignIn()}>Confirm</Button>
        </div>
        <Link href="/signUp" className={styles["box-custom-form__a"]}>
          Sign Up
        </Link>
      </div>
      {/* Created login form */}
    </main>
  );
};

export default SignIn;
