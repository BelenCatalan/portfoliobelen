import React from 'react';
// import aboutme from '../images/iconsabout.jpg';
import series from '../images/seriecortadados.jpeg';
import code from '../images/code-fiction.jpeg';
import cardsjs from '../images/cardsjs.jpeg';
import cardsreact from '../images/cardsreact.jpeg';
import randm from '../images/rickandmorty.png';
import '../stylesheets/App.scss';
import Project from './Project';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';

// import { FaHtml5 } from 'react-icons/fa';
// import { FaHtml5 } from 'react-icons/fa';
// import { FaHtml5 } from 'react-icons/fa';

function Portfolio() {
  return (
    <div className=" portfolio__div portfolio__sectiongrid ">
      {/* <h4 className="about__h4">Belen Catalán</h4> */}
      <ul className="portfolio__wrapper project__ul">
        <Project text="Quiénes somos" alt="team" id="1" image={code} icons={[<FaHtml5 />, <FaCss3 />, <FaSass />]} description="Quiénes somos: equipo de desarrollo" project="https://belencatalan.github.io/Code-Fiction-quienes-somos/" />
        <Project text="Crea tu tarjeta" alt="cardsjs" id="2" image={cardsjs} icons={[<FaHtml5 />, <FaCss3 />, <FaSass />, <DiJavascript1 />]} description="Generador de tarjetas digital" project="https://belencatalan.github.io/Generador-tarjetas-javaScript/" />
        <Project text="Buscador de series" alt="cardsjs" id="3" image={series} icons={[<FaHtml5 />, <FaCss3 />, <FaSass />, <DiJavascript1 />]} description="Encuentra tu serie, y añádela a favoritos" project="https://belencatalan.github.io/Buscador-de-series/" />
        <Project text="Crea tu tarjeta" alt="cardsjs" id="4" image={cardsreact} icons={[<FaHtml5 />, <FaCss3 />, <FaSass />, <FaReact />]} description="Generador de tarjetas digital, código heredado" project="https://belencatalan.github.io/Generador-Tarjetas-React/#/" />
        <Project text="Rick and Morty" alt="cardsjs" id="5" image={randm} icons={[<FaHtml5 />, <FaCss3 />, <FaSass />, <FaReact />]} description="Buscador de personajes de la serie" project="https://belencatalan.github.io/Rick-and-Morty/#/" />
      </ul>

      {/* <img className="about__img" src={aboutme} alt="about me"></img> */}
    </div>
  );
}

export default Portfolio;
