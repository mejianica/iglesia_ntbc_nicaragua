import React from "react";
import Slider from "../components/Slider";
import sliderImagesHome from "../assets/sliderImagesHome";
import TwoColumnSection from "../components/TwoColumSection";
import imageHome from "../assets/iglesia.jpg";

const Home = () => {
  return (
    <>
      <Slider images={sliderImagesHome} />
      <TwoColumnSection
        title={
          <>
            Únete a nosotros este <span className="text-primary">Domingo</span>
          </>
        }
        text={
          "¡Únase a nosotros en inglés, español o criollo para el culto cada semana!"
        }
        schedules={`
          CAMPUS DE DADE
          8:30 AM  Inglés
          9:30 AM  Grupos pequeños | Escuela Dominical
          11:00 a. m.  Inglés | Criollo | Español
          `}
        image={imageHome}
      />
    </>
  );
};

export default Home;
