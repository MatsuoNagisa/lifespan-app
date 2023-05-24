import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import Language from "./language";
import Name from "./page1";
import Nationality from "./page2";
import DateOfBirth from "./page3";
import ToDo from "./page4";
import Look from "./page5";

export default function Swiper1() {
  const [ selectedLanguage, setSelectedLanguage ] = useState('Japanese')

  const languageValue = {selectedLanguage, setSelectedLanguage}

  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><Language value={languageValue}/></SwiperSlide>
        <SwiperSlide><Name value={languageValue}/></SwiperSlide>
        <SwiperSlide><Nationality value={languageValue}/></SwiperSlide>
        <SwiperSlide><DateOfBirth value={languageValue}/></SwiperSlide>
        <SwiperSlide><ToDo value={languageValue}/></SwiperSlide>
        <SwiperSlide><Look value={languageValue}/></SwiperSlide>

      </Swiper>
    </div>
  );
}
