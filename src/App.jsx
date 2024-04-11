import img1 from "/ESCUDO ARG.webp";
import img2 from "/ESCUDO mza.webp";
import img3 from "/ESCUDO regatas.webp";
import img4 from "/ESCUDO sanidad.webp";
import namePlayer from "/namePlayer.webp";
import imgHome from "/imgHome.webp";
import imgHome2 from "/imgHome2.webp";
import imgPlayer from "/imgPlayer.webp";
import escudohome1 from "/bynarg.webp";
import escudohome2 from "/bynsanidad.webp";
import escudohome3 from "/bynregatas.webp";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import carrera from "/graf CARRERA.webp";
import biografia from "/grafBiografia.webp";
import datosbiometricos from "/datosbiometricos.webp";
import carreradata from "/carreradata.webp";
import suelaP from "/graf SP.webp";
import video from "/graf VIDEO.webp";
import fotografia from "/graf FOTOS.webp";
import titulos from "/titulos.webp";
import mapaCalor from "/mapacalor.webp";
import imgFooter from "/footer.webp";

import imgSlider1 from "/imgSlider1.jpg";
import imgSlider2 from "/imgSlider2.jpg";
import imgSlider3 from "/imgSlider3.jpg";
import imgSlider4 from "/imgSlider4.jpg";
import imgSlider5 from "/imgSlider5.jpg";
import imgSlider6 from "/imgSlider6.jpg";

import escudocol2 from "/ESCUDO mza.webp";
import escudocol3 from "/ESCUDO sanidad.webp";
import escudocol4 from "/ESCUDO regatas.webp";
import escudocol1 from "/escudo arg color.png";
import { Link } from "react-router-dom";
function App() {
  const images = [
    {
      original: imgSlider1,
      thumbnail: imgSlider1,
    },
    {
      original: imgSlider2,
      thumbnail: imgSlider2,
    },
    {
      original: imgSlider3,
      thumbnail: imgSlider3,
    },
    {
      original: imgSlider4,
      thumbnail: imgSlider4,
    },
    {
      original: imgSlider5,
      thumbnail: imgSlider5,
    },
    {
      original: imgSlider6,
      thumbnail: imgSlider6,
    },
  ];
  return (
    <>
      <main className="w-full font-raleway overflow-hidden">
        {/* MAIN */}
        <section
          id="home"
          className="relative h-[100vh] w-full pt-6 flex flex-col justify-between md:flex-row lg:h-screen"
        >
          <picture className="z-50 w-full flex justify-center items-end md:items-start md:w-auto">
            <img
              loading="lazy"
              className="max-w-72 md:max-w-xl md:ml-6 md:mt-8"
              src={namePlayer}
              alt=""
            />
          </picture>
          <header className="w-full mt-0 py-1 flex  justify-center gap-3 items-center overflow-hidden md:absolute md:right-0 md:w-auto md:flex-col md:gap-10 md:top-0 md:bottom-0 mr-24">
            <img
              className="max-w-[100px] md:max-w-32"
              src={escudohome1}
              alt=""
            />
            <img className="max-w-24 md:max-w-32" src={escudohome2} alt="" />
            <img className="max-w-24 md:max-w-32" src={escudohome3} alt="" />
          </header>
          <picture className="z-10 w-full flex justify-center items-end md:absolute md:bottom-0 md:mx-auto ">
            <img
              loading="lazy"
              className="img-home mt-0 max-w-72 md:max-w-72 lg:max-w-[30em]  lg:ml-44"
              src={imgHome2}
              alt=""
            />
          </picture>
        </section>
      
     
        {/* VIDEO */}
        <section
          id="video"
          className="w-full py-10 flex flex-col justify-center items-center lg:py-20"
        >
          <picture className="w-full flex justify-center items-center mb-6 lg:mb-10">
            <img
              loading="lazy"
              className="max-w-48 lg:max-w-64"
              src={video}
              alt=""
            />
          </picture>
          <div className="w-11/12 h-96 lg:h-[50em] md:w-4/5 md bg-zinc-700">
            <iframe
              className="rounded-lg w-full h-full "
              src="https://www.youtube.com/embed/Z4Eax-r54dQ?si=M8xf48CUVVdk2MwI"
              title="Luciano Gonzalez"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* HONORS */}
        <section
          id="about"
          className="relative w-full pt-8 flex flex-col items-center"
        >
          <picture className=" bg-white w-full flex justify-center">
            <img
              loading="lazy"
              className="max-w-60 md:max-w-80"
              src={carrera}
              alt=""
            />
          </picture>
          <article className="self-end my-3 rounded-md md:mr-14 lg:mt-16 lg:mr-36">
            <img
              className="w-60 md:w-72 lg:w-[300px]"
              src={carreradata}
              alt=""
            />
          </article>
          <picture className="w-full flex justify-center items-center lg:self-start lg:max-w-[650px]  lg:ml-24 lg:-mt-40 ">
            <img
              loading="lazy"
              className="w-full md:w-[500px]"
              src={titulos}
              alt=""
            />
          </picture>
          <picture className="relative self-end flex -mt-16 md:self-center md:ml-60 md:-mt-16 lg:-mt-64">
            <img
              loading="lazy"
              className="img-home max-w-56 md:max-w-72"
              src={imgHome}
              alt=""
            />
            <header className=" absolute -left-44 bottom-14 flex  justify-center gap-2 items-center overflow-hidden md:bottom-7 md:-left-32  lg:-left-[450px]">
              <div className="lg:flex">
                <img
                  loading="lazy"
                  className="max-w-20 md:max-w-28"
                  src={escudocol1}
                  alt=""
                />
                <img
                  loading="lazy"
                  className="max-w-20 md:max-w-28"
                  src={escudocol2}
                  alt=""
                />
              </div>

              <div className="lg:flex">
                <img
                  loading="lazy"
                  className="max-w-20 md:max-w-28"
                  src={escudocol3}
                  alt=""
                />

                <img
                  loading="lazy"
                  className="max-w-20 md:max-w-28"
                  src={escudocol4}
                  alt=""
                />
              </div>
            </header>
          </picture>
        </section>
        {/* BIO */}
        <section
          id="data-player"
          className="relative w-full  pt-10 flex flex-col md:flex-row md:h-screen lg:justify-evenly"
        >
          <picture className="w-full flex justify-center items-center md:absolute md:top-0 md:right-0  md:left-0 md:mt-8 ">
            <img
              loading="lazy"
              className="max-w-56 md:max-w-80"
              src={biografia}
              alt=""
            />
          </picture>
          <article className="max-w-[400px] w-11/12 rounded-md mt-3 md:w-[450px] md:h-[180px] md:mt-40 pl-4 pt-3 md:ml-16">
            <img src={datosbiometricos} alt="" />
          </article>
          <picture className="w-full h-auto flex justify-end items-end -mt-32 md:w-auto md:mt-0">
            <img
              loading="lazy"
              className="max-w-56 md:max-w-80"
              src={imgPlayer}
              alt=""
            />
          </picture>
          <picture className="w-full h-auto flex justify-start items-end -mt-28 md:justify-center mb-8 md:w-auto">
            <img
              loading="lazy"
              className="max-w-56 md:max-w-80"
              src={mapaCalor}
              alt=""
            />
          </picture>
        </section>

        {/* FOTOS */}
        <section
          id="fotografia"
          className="w-full flex flex-col justify-center items-center py-14"
        >
          <picture className="w-full flex justify-center items-center mb-8">
            <img
              loading="lazy"
              className="max-w-56 md:max-w-96"
              src={fotografia}
              alt=""
            />
          </picture>
          <picture loading="lazy" className="w-[95vw] mb-6 md:w-4/5 md:my-12">
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={false}
              showBullets={true}
            />
          </picture>
          <a href="https://www.instagram.com/chueeca" target="_blank">
            <button className="w-56 leading-snug py-2 px-2 mt-10 bg-red-700 text-lg font-semibold text-gray-200 rounded-lg lg:mb-10 hover:scale-110 duration-300">
              Contactá al Jugador
            </button>
          </a>
        </section>

        {/* FOOTER */}
        <section
          id="footer"
          className="w-full flex flex-col justify-center items-center"
        >
          <picture className="w-full flex justify-center items-center my-12">
            <img
              loading="lazy"
              className="max-w-64 lg:max-w-96"
              src={suelaP}
              alt=""
            />
          </picture>
          <picture className="w-[95vw] my-4 md:w-4/5 md:my-20 lg:mb-16 flex justify-center self-center lg:-mt-12 lg:ml-6 ">
            <img loading="lazy" src={imgFooter} alt="" />
          </picture>
        </section>
      </main>
    </>
  );
}

export default App;
/* Matías Origaen
matiorigaen@gmail.com

 3 ascensos 
Campeón primera C 
Campeón primera B capitán 
Campeón nacional de primera, goleador con 20 goles y capitán 
Campeón c20 de clubes, capitán y mejor jugador 
Campeón c17 de selecciones capitán 
Campeón c20 de selecciones capitán
Campeón copa de oro c15 
Campeón copa de oro c17
Campeón mundial c20 capitán, mejor jugador y goleador con 11 goles
 Ascenso a primera A
Campeón de plata C17 capitán 
Campeón de plata c20 capitán 
Campeón de bronce c20 capitán
 */
