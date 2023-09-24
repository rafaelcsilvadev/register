import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./style.module.scss";

type ButtonElements = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "className"
  >;

interface ButtonProps extends ButtonElements {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({children, onClick, className, ...rest}) => {
  return (
    <button
      className={`${styles["button"]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;