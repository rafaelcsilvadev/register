'use client'

import { FC, useState } from "react";

import styles from "./style.module.scss";

import Input from "../components/input/input";
import Button from "../components/button/button";
import Title from "../components/title/title";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
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
          <Button onClick={() => handleSave()}>Enter</Button>
        </div>
        <a className={styles["box-custom-form__a"]}>Register</a>
      </div>
      {/* Created login form */}
    </main>
  );
};

export default SignIn;
