"use client";

import { Bruno_Ace } from "next/font/google";
import styles from "./styles.module.scss";
import { FC } from "react";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

interface NavBarProps{
  text?: string
}

const NavBar: FC<NavBarProps> = ({...props}) => {
  return (
    <nav className={styles["nav"]}>
      <span className={`${brunoAce.className} ${styles["nav__span"]}`}>
        {props.text ?? ''}
      </span>
    </nav>
  );
};

export default NavBar;
