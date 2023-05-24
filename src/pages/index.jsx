

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import {gsap} from "gsap";
// import cicadaSound from './images/higurasi.mp3';


export default function Splash() {
  const router = useRouter()
  const elementRef = useRef(null)
  useEffect(() => {
     // 蝉の鳴き声の効果音を再生する関数
      const playCicadaSound = () => {
      const audio = new Audio('/images/higurasi.mp3');
      audio.play();
    };
    playCicadaSound(); // スプラッシュが表示された直後に効果音を再生
    gsap.to(elementRef.current, {
      opacity:0,
      duration:2,
      onComplete:()=>{
        router.push("/swiper")
      }
    });
  }, [])

  return (
    <div  ref={elementRef} className={styles.container}>
      <div className={styles.title_box}>
        <h1 className={styles.title}>寿命見える化アプリ</h1>
      </div>
      <div className={styles.img_box}>
        <img src='images/1.png' alt='少年画像' className={styles.boy} />
      </div>
    </div>
  )
}
