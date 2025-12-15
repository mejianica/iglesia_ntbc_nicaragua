import React from "react";
import Slider from "../components/Slider";
import sliderImagesHome from "../assets/sliderImagesHome";
import TwoColumnSection from "../components/TwoColumSection";
import imageHome from "../assets/img.jpg";
import SectionOnlyText from "../components/SectionOnlyText";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <>
      <Slider images={sliderImagesHome} />
      <TwoColumnSection
        title={
          <>
            Únete a nosotros este <span className="text-custom ">Domingo</span>
          </>
        }
        text={
          "¡Únase a nosotros en inglés o español  para el culto cada semana!"
        }
        schedules={`
          CAMPUS DE DADE
          8:30 AM  Inglés
          9:30 AM  Grupos pequeños | Escuela Dominical
          11:00 a. m.  Inglés | Criollo | Español
          `}
        image={imageHome}
      />
      <SectionOnlyText
        text_welcome={"Bienvenidos a"}
        title={"IGLESIA NTBC NICARAGUA"}
        colorTitle={"text-primary"}
        img={logo}
        subtitle={"Glorifiquemos a Dios haciendo discípulos para Cristo"}
        text2={
          "Cada fin de semana tenemos servicios con adoración en vivo y sincera, y mensajes inspiradores y desafiantes."
        }
        text3={
          "Los invitamos a visitarnos y conectarse durante la semana en una de nuestras muchas oportunidades de ministerio y estudios bíblicos. ¡Juntos podemos seguir compartiendo el amor y la esperanza de Jesús en el sur de Florida y más allá!"
        }
      />
    </>
  );
};

export default Home;
