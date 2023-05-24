import Head from "next/head";
import styles from "./language.module.css";
import { useState } from "react";

export default function Language(props) {
  const [selectedLanguage, setSelectedLanguage] = useState("")

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
    localStorage.setItem("language", selectedValue);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>language</title>
      </Head>
      <div className={styles.plane_box}>
        <img src="images/2.png" alt="飛行機画像" className={styles.plane} />
      </div>
      <div className={styles.language}>
        <h2>language</h2>
        <h2>言語</h2>
      </div>
      <div className={styles.language_select}>
        <select name="language" className={styles.language_btn} value={selectedLanguage} onChange={handleChange}>
          <option value="">choose your language (選択肢を表示)</option>
          <option value="Japanese">Japanese(日本語)</option>
          <option value="English">English(英語)</option>
        </select>
      </div>
        <div className={styles.gate_box}>
          <img src="images/3.png" alt="搭乗口画像" className={styles.gate} />
        </div>
    </div>
  );
}
