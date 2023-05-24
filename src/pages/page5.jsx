import Message from "@/components/message";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page5.module.css";

export default function Look(props) {
  const [language,setLanguage] = useState("")

  useEffect(() => {
    const language = localStorage.getItem("language");
    setLanguage(language);
  }, []);
  const text = language === "Japanese" ? "さぁ、あなたに残された時間を\n見てみましょう":
  `Now, let'ts see how much time is left\nin yours life.\nLet's take a look.` ;
  const next = language === "Japanese" ? "次へ" : "next";
  return (
    <div className={styles.container}>
      <Head>
        <title>Look</title>
      </Head>

      <div className={styles.message_box}>
        <Message text={text} />
        <Link href="/swiper2" className={styles.link}>
            {next}
        </Link>
      </div>
      <div className={styles.woman_box}>
        <img src="images/10.png" alt="女性画像" className={styles.woman} />
      </div>
    </div>
  );
}
