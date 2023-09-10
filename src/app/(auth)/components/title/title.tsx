import { Bruno_Ace } from "next/font/google";
import styles from "./style.module.scss";
import { FC, ReactNode } from "react";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

interface TitleProps {
    children: ReactNode;
    className?: string
}

const Title: FC<TitleProps> = (props) => {
  return (
    <span className={`${brunoAce.className} ${styles["span"]} ${props.className}`}>
      {props.children}
    </span>
  );
};

export default Title;
