'use client'

import Link from "next/link";
import { FC } from "react";
import * as Components from "../../components";
import styles from "./styles.module.scss";
import { useSignUp } from "./services";

const Register: FC = () => {
  const methods = useSignUp();

  return (
    <main className={styles["main"]}>
      <div className={styles["box-custom-form"]}>
        <Components.Title>Sign Up</Components.Title>
        <div className={styles["box-custom-form__div"]}>
          <Components.Input
            type="text"
            value={methods.name}
            onChange={(value) => methods.setName(value)}
            placeholder="Name"
          />
          <Components.Input
            className="mt-5"
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
          <Components.Input
            className="mt-5"
            type="password"
            value={methods.confirmPassword}
            onChange={(value) => methods.setConfirmPassword(value)}
            placeholder="Confirm Password"
          />
          <Components.Button onClick={() => methods.handleDoSignUp()}>Confirm</Components.Button>
        </div>
        <Link href="/signIn" className={styles["box-custom-form__a"]}>
          Sign In
        </Link>
      </div>
    </main>
  );
}

export default Register;