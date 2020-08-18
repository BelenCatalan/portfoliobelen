import React from 'react';
import '../stylesheets/App.scss';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FaGulp } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaNpm } from 'react-icons/fa';
import { DiGit } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa';
import { FaTrello } from 'react-icons/fa';
import { FaSlack } from 'react-icons/fa';

function about() {
  return (
    <div className="about__div">
      <div className="about__div--bien">
        <h4 className="about__h4">Bienvenidos!</h4>
      </div>
      <div className="about__div--text">
        <p className="about__p">
          Hola, mi nombre es <a href="https://github.com/BelenCatalan">Belén</a>, soy desarrolladora <span className="about__span">front-end</span>, el lenguaje de programación con el que trabajo es <span className="about__span">javaScript</span> y una de sus librerías <span className="about__span">React</span>.
        </p>
        <p className="about__p">
          Mi objetivo es poder crear soluciones tecnológicas adaptadas a cualquier necesidad, para ello, seguir formándome es una parte esencial en mi camino. Considero que el <span className="about__span">trabajo en equipo</span> es la mejor forma de avanzar en un trabajo, proyecto o incluso la vida.
        </p>
        <p className="about__p">
          Me considero una persona muy <span className="about__span">curiosa</span>, obtengo mucha motivación aprendiendo cosas nuevas, sobre todo si con esos conocimientos puedo crear cosas por mi misma. Soy <span className="about__span">tenaz</span> y <span className="about__span">comprometida</span>, de fácil <span className="about__span">adaptabilidad</span> y <span className="about__span">empatía</span>, los nuevos retos me dan la vida.{' '}
        </p>
        <p className="about__p">Esa parte curiosa de mi me llevó a estudiar una ingeniería, en concreto Ing.tec.telecomunicaciones Sonido-imagen (abrir mi walkman de adolescente tuvo mucho que ver), y mi experiencia trabajando me ha impulsado hacía aquello que se me resistía, la programación. Poder mezclar ambos ámbitos sería un sueño para mi. </p>
        <p className="about__p, about__p--music">
          No puedo vivir sin <span className="about__span">música</span> (como en aquel anuncio viejuno), y aprender baile flamenco me fascina.
        </p>
        <h5 className="about__h5">Herramientas con las que trabajo:</h5>
        <ul className="about__ul">
          <li className="about__li">
            <FaHtml5 />
          </li>
          <li className="about__li">
            <FaCss3 />
          </li>
          <li className="about__li">
            <FaSass />
          </li>
          <li className="about__li">
            <DiJavascript1 />
          </li>
          <li className="about__li">
            <FaGulp />
          </li>
          <li className="about__li">
            <FaReact />
          </li>
          <li className="about__li">
            <FaNodeJs />
          </li>
          <li className="about__li">
            <FaNpm />
          </li>
          <li className="about__li">
            <DiGit />
          </li>
          <li className="about__li">
            <FaGithub />
          </li>
          <li className="about__li">
            <FaTrello />
          </li>
          <li className="about__li">
            <FaSlack />
          </li>
        </ul>
        {/* <img className="about__img" src={aboutme} alt="about me"></img> */}
      </div>
    </div>
  );
}

export default about;
