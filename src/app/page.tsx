"use client";

import * as Components from "./components";
import styles from "./styles.module.scss";

export default function Start() {
  return (
    <main className={styles.main}>
      <Components.Spin />
    </main>
  );
}
