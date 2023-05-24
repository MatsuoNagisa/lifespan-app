import Message from "@/components/message";
import ToDos from "@/components/todos";
import Head from "next/head";
import styles from "./page10.module.css";
import { useState, useEffect, useRef } from "react";
import {gsap} from "gsap";
import Router from "next/router";

export default function NewToDos() {
  const [language,setLanguage] = useState("")
  const [todos, setTodos] = useState([]);
  const elementRef = useRef(null)
  useEffect(() => {
    const language = localStorage.getItem("language");
    setLanguage(language);
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos.slice(0, 3));

    gsap.to(elementRef.current, { scale:1.5,repeat:-1,duration:1,yoyo:true,});
  }, []);
  const text = language === "Japanese" ? `もうあなたは無敵。\nジャンジャン\n新しいことに\nチャレンジ\nしよう！\n飛び込もう！` :
  `You are now invincible\nLet's try something\nnew !\nLet's dive in !`;
  const placeholder = language === "Japanese" ? "新しいやりたいこと" : "New thing you want to do";
  console.log(todos);
  const handleClick = () =>{
    Router.push("/swiper2")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>new todos</title>
      </Head>
      <div className={styles.minicontainer1}>
        <img src="images/18.png" alt="少年画像" className={styles.boy} />
        <div className={styles.Message_box}>
          <Message
          text={text}
          />
        </div>
      </div>

      <div className={styles.todos_box}>
        <div className={styles.todos}>
          <ToDos
          placeholder={placeholder} />
        </div>
      </div>

      <div className={styles.minicontainer2}>
        <img src="images/19.png" alt="翼画像" className={styles.wing} />
        <div className={styles.man}>
          <img
            src="images/20.png"
            alt="戦士サラリーマン画像"
            className={styles.man}
          />
        </div>
        <div className={styles.alian_man_box}>
          <img
            src="images/21.png"
            alt="宇宙人と男性画像"
            className={styles.alian_man}
          />
        </div>
        <div className={styles.miniheart_box} ref={elementRef}
        onClick={handleClick}>
          <img
            src="./images/mini-heart.svg"
            alt="ハートSVG"
            className={styles.miniheart}
          />
          <p>つづく</p>
        </div>
      </div>
    </div>
  );
}











// import Message from "@/components/message";
// import ToDos from "@/components/todos";
// import Head from "next/head";
// import styles from "./page10.module.css";
// import { useState, useEffect } from "react";

// export default function NewToDos() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
//     setTodos(savedTodos.slice(0, 3));
//   }, []);

//   console.log(todos);

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>new todos</title>
//       </Head>
//       <div className={styles.minicontainer1}>
//         <img src="images/18.png" alt="少年画像" className={styles.boy} />
//         <div className={styles.Message_box}>
//           <Message
//             text={`もうあなたは無敵。\nジャンジャン\n新しいことに\nチャレンジ\nしちゃおう！\n飛び込もう！`}
//           />
//         </div>
//       </div>

//       <div className={styles.todos_box}>
//         <div className={styles.todos}>
//           {todos.map((todo, index) => (
//             <div key={index} className={styles.todo}>
//             <div className={styles.number_box}>
//               <div className={styles.number}>{index + 1}</div>
//             </div>
//               <input
//                 type="text"
//                 className={styles.text}
//                 value={todo}
//                 disabled
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles.minicontainer2}>
//         <img src="images/19.png" alt="翼画像" className={styles.wing} />
//         <div className={styles.man}>
//           <img
//             src="images/20.png"
//             alt="戦士サラリーマン画像"
//             className={styles.man}
//           />
//         </div>
//         <div className={styles.alian_man_box}>
//           <img
//             src="images/21.png"
//             alt="宇宙人と男性画像"
//             className={styles.alian_man}
//           />
//         </div>

//         <button className={styles.btn}>次へ</button>
//       </div>
//     </div>
//   );
// }
