import { Bruno_Ace } from "next/font/google";
import styles from "./style.module.scss";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function NavBar() {
  return (
      <nav className={styles["nav"]}>
        <span className={`${brunoAce.className} ${styles["nav__span"]}`}>
          Rafa - Register
        </span>
      </nav>
  );
}
