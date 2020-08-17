import React from 'react';
import '../stylesheets/App.scss';
import ReactTypingEffect from 'react-typing-effect';

function home() {
  const prueba = ['La manera más efectiva de hacerlo, es hacerlo (Amelia Earhart/Aviadora)', 'Mira de cerca al presente que estás construyendo, porque debe parecerse al futuro con el que sueñas (Alice Walker/Escritora)'];
  return (
    <div className="home__div">
      <div className="home__name">
        <h4 className="home__h4">
          <ReactTypingEffect text="Belén Catalán" eraseDelay="1000000" />
        </h4>
      </div>
      <div className="home__quote">
        <ReactTypingEffect text={prueba} eraseDelay="5000" typingDelay="6000" speed="150" />
      </div>
    </div>
  );
}

export default home;
