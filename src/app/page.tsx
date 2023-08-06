"use client";

import { useLayoutEffect } from "react";
import Spin from "./components/spin/spin";
import styles from "./styles.module.css";
import { STORAGE_KEY_AUTH_TOKEN } from "./constants/localStorage";
import { useRouter } from "next/navigation";
import { ROUTES_CMS_MENU, ROUTES_SIGN_IN } from "./constants/routes";

export default function Start() {
  const router = useRouter();

  useLayoutEffect(() => {
    const token = localStorage.getItem(STORAGE_KEY_AUTH_TOKEN);

    setTimeout(() => { }, 2000);

    if (!token) {
      router.push(ROUTES_SIGN_IN);
    } else {
      router.push(ROUTES_CMS_MENU);
    }
  });

  return (
    <main className={styles.main}>
      <Spin />
    </main>
  );
}
