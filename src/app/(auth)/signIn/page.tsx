'use client'

import { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import * as Components from '../../components';
import { useSignIn } from "./services";

const SignIn: FC = () => {
  const methods = useSignIn();

  return (
    <main className={styles["main"]}>
      <div className={styles["box-custom-form"]}>
        <Components.Title>Rafa - Register</Components.Title>
        <div className={styles["box-custom-form__div"]}>
          <Components.Input
            type="email"
            value={methods.email}
            onChange={(value) => methods.setEmail(value)}
            placeholder="E-mail"
          />
          <Components.Input
            className="mt-5"
            type="password"
            value={methods.password}
            onChange={(value) => methods.setPassword(value)}
            placeholder="Password"
          />
          <Components.Button onClick={() => methods.handleDoSignIn()}>Confirm</Components.Button>
        </div>
        <Link href="/signUp" className={styles["box-custom-form__a"]}>
          Sign Up
        </Link>
      </div>
    </main>
  );
};

export default SignIn;
