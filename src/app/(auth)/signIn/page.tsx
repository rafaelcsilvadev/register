'use client'

import { FC } from "react";

import styles from "./style.module.scss";
import { Bruno_Ace } from "next/font/google";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});



const SignIn: FC = () => {
  return (
    <main className={styles["main"]}>
      {/* Creating login form */}
      <div className={styles["box-form"]}>
        <span className={`${brunoAce.className} ${styles["box-form__span"]}`}>
          R - CMS
        </span>
        <form className={styles["box-form__form"]}>
          <input
            className={styles["box-form__form__input"]}
            placeholder="E-mail"
          />
          <input
            className={`${styles["box-form__form__input"]} mt-5`}
            placeholder="Password"
            type="password"
          />
          <button className={styles["box-form__form__button"]}>Enter</button>
        </form>
        <a className={styles["box-form__a"]}>Register</a>
      </div>
    </main>
  );
};

export default SignIn;
