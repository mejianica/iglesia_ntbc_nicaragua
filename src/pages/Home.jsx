import React from "react";
import Slider from "../components/Slider";
import sliderImagesHome from "../assets/sliderImagesHome";

const Home = () => {
  return (
    <>
      <Slider images={sliderImagesHome} />
    </>
  );
};

export default Home;
