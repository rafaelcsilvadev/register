'use client'

import Link from "next/link";
import { FC, useState } from "react";
import Button from "../components/button/button";
import Input from "../components/input/input";
import Title from "../components/title/title";

import styles from "./style.module.scss";

const Register: FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleDoSignUp = () => {
    console.log(`email: ${email}`);
    console.log(`name: ${name}`);
    console.log(`password: ${password}`);
    console.log(`confirmPassword: ${confirmPassword}`);
  };

  return (
    <main className={styles["main"]}>
      {/* Creating register custom form */}
      <div className={styles["box-custom-form"]}>
        <Title>Sign Up</Title>
        <div className={styles["box-custom-form__div"]}>
          <Input
            type="text"
            value={name}
            onChange={(value) => setName(value)}
            placeholder="Name"
          />
          <Input
            className="mt-5"
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
          <Input
            className="mt-5"
            type="password"
            value={confirmPassword}
            onChange={(value) => setConfirmPassword(value)}
            placeholder="Confirm Password"
          />
          <Button onClick={() => handleDoSignUp()}>Confirm</Button>
        </div>
        <Link href="/signIn" className={styles["box-custom-form__a"]}>
          Sign In
        </Link>
      </div>
      {/* Created register form */}
    </main>
  );
}

export default Register;