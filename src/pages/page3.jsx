import Message from "@/components/message";
import Head from "next/head";
import styles from "./page3.module.css";
import Router from "next/router";
import { useEffect, useState } from "react";

export default function DateOfBirth(props) {
    const [language,setLanguage] = useState("")
    const text = language === "Japanese" ? "あなたが産まれたのはいつ？" : "When were you bone ?";
    const next = language === "Japanese" ? "次へ" : "next";
  useEffect(() => {
    const language = localStorage.getItem("language");
    setLanguage(language);
    console.log(language);
  }, []);
  const [selectedValue, setSelectedValue] = useState([]);
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    localStorage.setItem("dateOfBirth", selectedValue);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>date of birth</title>
      </Head>

      <div className={styles.Message_box}>
        <Message text={text} />
      </div>
      <div className={styles.data_box}>
        <input type="date" name="calendar" max="2300-12-31" className={styles.data_select} value={selectedValue} onChange={handleChange}/>
      </div>

      <div className={styles.man_box}>
        <img src="images/7.png" alt="男性画像" className={styles.man} />
      </div>
      <div className={styles.candle_box}>
        <img src="images/8.png" alt="ロウソク画像" className={styles.candle} />
      </div>
    </div>
  );
}
