import { FC, ReactNode } from "react";
import styles from "./style.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={`${styles["button"]} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;