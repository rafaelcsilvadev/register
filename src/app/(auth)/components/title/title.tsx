import { Bruno_Ace } from "next/font/google";
import styles from "./style.module.scss";
import { FC, HTMLAttributes, ReactNode } from "react";


type TitleElements = Omit<HTMLAttributes<HTMLSpanElement>, "className">;

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

interface TitleProps extends TitleElements {
  children: ReactNode;
  className?: string;
}

const Title: FC<TitleProps> = ({children, className, ...rest}) => {
  return (
    <span
      className={`${brunoAce.className} ${styles["span"]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Title;
