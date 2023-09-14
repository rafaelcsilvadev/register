import {
  FC,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import styles from "./style.module.scss";

type InputElements = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "className" | "value"
>;

interface InputProps extends InputElements {
  onChange: (event: string) => void;
  className?: string;
  value?: string | number | readonly string[] | undefined;
}

const Input: FC<InputProps> = ({ onChange, className, value, ...rest }) => {
  return (
    <input
      className={`${styles["input"]} ${className}`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      {...rest}
    />
  );
};

export default Input;
