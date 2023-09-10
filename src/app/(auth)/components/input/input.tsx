import { FC, HTMLInputTypeAttribute } from "react";
import styles from "./style.module.scss";

interface InputProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: (event: string) => void;
  value: string;
  className?: string;
}

const Input: FC<InputProps> = (props) => {
  return (
    <input
      className={`${styles["input"]} ${props.className}`}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
};

export default Input;
