
import Message from "@/components/message";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState} from "react";
import styles from "./page8.module.css";
import {gsap} from "gsap";


export default function CheckTodos(props) {
  const [language,setLanguage] = useState("")
  const [todos, setTodos] = useState([]);
  const [isCheckedList, setIsCheckedList] = useState([false, false, false]);
  const [name, setName] = useState("");

  useEffect(() => {
    const language = localStorage.getItem("language");
    setLanguage(language);
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const saveIsCheckedList = JSON.parse(localStorage.getItem('isCheckedList')) || [false, false, false];
    setTodos(savedTodos.slice(0, 3));
    setIsCheckedList(savedTodos.slice(0, 3).map(() => false));


    const boyImage = document.querySelector(`.${styles.boy}`);
    boyImage.addEventListener("click", handleBoyClick);

    return () => {
      boyImage.removeEventListener("click", handleBoyClick);
    };
  }, []);

  const text = language === "Japanese" ? `${name}のやりたいこと` : `What ${name} wants to do`;


  const handleClick = (index) => {

    setIsCheckedList((prevList) => {
      const newList = [...prevList];
      newList[index] = !newList[index];  //初期値がfalseだとtrueになる
      localStorage.setItem('isCheckedList', JSON.stringify(newList))
      return newList;
    });
  };
  console.log(isCheckedList)

  const handleSunClick = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dateString = `${year}-${month}-${day}`;
    localStorage.setItem('date', dateString);
  };



  const [textIndex, setTextIndex] = useState(0);
  const texts = ['いいことないかな〜', '・・・ねむ。', 'なんとかなるさ', 'ハクナマタタ', 'お腹空いたな〜', 'おやつおやつ♪'];

  useEffect(() => {

    // タイマーを設定して、30秒ごとにテキストを更新する
    const interval = setInterval(() => {
    setTextIndex((textIndex + 1) % texts.length); // テキストのインデックスを更新し、最後まで行ったら0に戻るようにする
    }, 7000);
    const square = document.querySelector('#minimessage_box');
  gsap.to(square, {
    duration: 3,
    autoAlpha: 1,
    onComplete:()=>{
      gsap.to(square,{
        duration:3,
        autoAlpha:0
        }
  )}
  })

    return () => clearInterval(interval); // コンポーネントがアンマウントされた時にタイマーをクリアする


  }, [textIndex, texts.length]);


  const handleBoyClick = () => {
    const audio = new Audio("./images/gacha.mp3");
    audio.play();
  };




  return (
    <div className={styles.container}>
      <Head>
        <title>check todos</title>
      </Head>

      <div className={styles.minicontainer1}>
        <img src="images/14.png" alt="握手画像" className={styles.hands} />
        <div className={styles.message}>
          <Message text={text}/>
        </div>
      </div>

      <div className={styles.todos}>
        {todos.map((todo, index) => (
          <div key={index} className={styles.todo}>
            <div className={styles.number_box}>
              <div className={styles.number}>{index + 1}</div>
            </div>
            <input type="text" className={styles.text} value={todo} disabled />
            <img src="./images/hanamaru.svg" alt="はなまるSVG" className={`${styles.hanamaru} ${isCheckedList[index] ? '' : styles.hidden}`}/>
            <div type="text" className={styles.check_box}>
              <div type="text" className={styles.icon_box}>
                <img src="./images/icon.svg" alt="チェックSVG" className={styles.icon} onClick={() => handleClick(index)}/>
              </div>
              <img src="./images/check.svg" alt="チェックSVG" className={`${styles.check} ${isCheckedList[index] ? '' : styles.hidden} `} onClick={() => handleClick(index)}/>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.minicontainer2}>
        <img src="images/15.png" alt="少年画像" className={styles.boy} onClick={handleBoyClick}/>
        <div className={styles.minimessage_box} id="minimessage_box">
          <p>{texts[textIndex]}</p>
        </div>
        <div className={styles.sun_box} >
        {isCheckedList.every((isChecked) => isChecked) ?(
              <Link href="/swiper3" className={styles.link}>
                <img src="./images/sun.svg" alt="太陽SVG" className={styles.sun} onClick={handleSunClick}/>
              </Link>
        ) : (
          <img src="./images/sun.svg" alt="太陽SVG" className={`${styles.sun} ${styles.sun_hidden}`} />
        )}
        </div>
      </div>
    </div>
  );
}
