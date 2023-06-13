import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MultiActionAreaCard from "../Card";
import LivingCategory from "../LivingCategory";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import MostPopularCard from "../MostPopularCard";
import { Box } from "@mui/material";

const sprSlide = { display: "flex", justifyContent: "center", alignItems: "center"}

export default function MostPopular() {
  return (
    <>
    <Box margin={"0 90px"} >
    <Swiper   spaceBetween={30} slidesPerView={4} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide >
            <MostPopularCard />
        </SwiperSlide>

        <SwiperSlide >
            <MostPopularCard />
        </SwiperSlide>

        <SwiperSlide >
            <MostPopularCard />
        </SwiperSlide>

        <SwiperSlide >
            <MostPopularCard />
        </SwiperSlide>

        <SwiperSlide >
            <MostPopularCard />
        </SwiperSlide>

      </Swiper>
    </Box>
      
    </>
  );
}