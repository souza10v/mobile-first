"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { PrimaryInputs } from "../components/primary-input";
import { useState } from "react";
import { ButtonPrimary } from "../components/button-primary";

export default function Home() {

  const [search, setSearch] = useState<string>("");

  const handleChange = (value: string) => {
    setSearch(value);
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>What you want to drink today</h1>
      <PrimaryInputs value={search} label="Search by your favorite ingredient" onChange={handleChange}/>
      <p className={styles.paragraph}>OR</p>
      <ButtonPrimary label="get surprised!" onClick={() => {}}/>
    </main>
  );
}
