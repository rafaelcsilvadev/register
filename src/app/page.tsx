"use client";

import Spin from "@/components/spin/spin";
import styles from "./styles.module.scss";

export default function Start() {
  return (
    <main className={styles.main}>
      <Spin />
    </main>
  );
}
