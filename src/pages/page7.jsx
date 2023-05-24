import Message from "@/components/message";
import Head from "next/head";
import { useEffect, useState ,useRef} from "react";
import styles from "./page7.module.css";

export default function Achievement(props) {
  const [language,setLanguage] = useState("")
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

  }, []);

  const text1 = language === "Japanese" ? `おめでとうございます\nあなたは平均寿命より長生きしています` :`Life expectancy achieved`;
  const text2 = language === "Japanese" ? `平均寿命達成` :`Life expectancy achieved`;
  return (
    <div className={styles.cherry_blossom_container} ref={elementRef}>
      <div className={styles.container}>
      <Head>
        <title>Achievement</title>
      </Head>
      <div className={styles.mini_container1}>
        <img src="images/22.png" alt="ミラーボール画像" className={styles.mirror_ball}/>
        <div>
          <img src="images/23.png" alt="神様画像" className={styles.god}/>
        </div>
        <div className={styles.text1_box}>
          <Message text={text1} />
        </div>
      </div>
      <div className={styles.mini_container2}>
          <img src="images/24.png" alt="ゴールした人画像" className={styles.man}/>
        <div className={styles.text2_box}>
          <Message text={text2} />
        </div>

      </div>
      </div>
    </div>

  );

}
