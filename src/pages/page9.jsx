import Head from "next/head";
import { useEffect, useState,useRef } from "react";
import styles from "./page9.module.css";

export default function Commendation(props) {
  const [language,setLanguage] = useState("")
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const elementRef = useRef(null);
  const [petals, setPetals] = useState([]);
  useEffect(() => {
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
    // 桜のアニメーション
      const section = elementRef.current;
      const createPetal = () => {
      const petalEl = document.createElement('span');
      petalEl.className = styles.petal;
      const minSize = 10;
      const maxSize = 15;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      petalEl.style.width = `${size}px`;
      petalEl.style.height = `${size}px`;
      petalEl.style.left = Math.random() * innerWidth + 'px';
      section.appendChild(petalEl);
      setPetals((prevState) => [...prevState, petalEl]); // petals配列に追加
    }
// 一定時間が経てば花びらを消す

      setInterval(createPetal, 700);

      setTimeout(() => {
      petals.forEach((petal) => petal.remove());
      }, 10000);
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
    const language = localStorage.getItem("language");
    setLanguage(language);
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
    const storedDate = localStorage.getItem("date");
    if (storedDate) {
      setDate(storedDate.split("-"));
    }
  }, []);

  const h1 = language=== "Japanese" ? "表彰状" : `certificate of\ncommendation`;
  const h2 = language === "Japanese" ? "殿" : "";
  const text1 = language === "Japanese" ? "あなたはやりたいことの" : "";
  const text2 =
    language === "Japanese"
      ? `見事叶えることが出来ました\nあなたの人生を楽しもうとする\n行動力をここにたたえ表彰いたします`
      : `You have made your dreams\ncome true!\nWe hereby commend you for\nyour enjoyment of life and your\ngreat energy!`;
  const splitText2 = text2.split("\n");

  return (

      <div className={styles.cherry_blossom_container} ref={elementRef}>
        <div className={styles.container}>
          <Head>
            <title>commendation</title>
          </Head>
          <h1 className={styles.h1}>{h1}</h1>
          <h2 className={styles.h2}>
            {name}
            {h2}
          </h2>
          <div className={styles.minicontainer1}>
            <p className={styles.text1}>{text1}</p>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
            <div className={styles.message_box}>
              <div className={styles.message}>
                {splitText2.map((text) => {
                  return <p className={styles.message}>{text}</p>;
                })}
              </div>
            </div>

            <div className={styles.data_box}>
              <p className={styles.data}>
                {date[0]}.{date[1]}.{date[2]}
              </p>
              <p className={styles.app_name}>寿命見える化アプリ</p>
              <img
                src="./images/stanp.svg"
                alt="スタンプSVG"
                className={styles.stanp}
              />
            </div>
          </div>
          <div className={styles.minicontainer2}>
            <div className={styles.sakura_box}>
              <img src="images/16.png" alt="桜画像" className={styles.sakura} />
            </div>
            <div className={styles.man_box}>
              <img src="images/17.png" alt="男性画像" className={styles.man} />
            </div>
            <div className={styles.name_amazing_box}>
              <div className={styles.name}>
                {name}
                <p className={styles.amazing}>すごい</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
