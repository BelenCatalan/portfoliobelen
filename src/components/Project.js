import React, { useState, useRef } from 'react';
import '../stylesheets/App.scss';
import { CSSTransition } from 'react-transition-group';

function Project(props) {
  console.log(props);
  console.log(props.icons);
  console.log(props.project);

  const [inHover, setHover] = useState(false);
  // const [inProp, setInProp] = useState(false);
  let changeBack = useRef(false);

  const handleLink = () => {
    console.log('me han clicado');
  };

  const printIcons = () => {
    return (
      <small key={props.icons} className="project__text--color project__text--small">
        {props.icons}
      </small>
    );
  };

  return (
    <li ref={changeBack} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="project__container">
      <CSSTransition ref={changeBack} in={inHover} timeout={6000} classNames="my-node">
        <div className="project__dark">
          {props.description}
          <button className="project__button--dark" onClick={handleLink}>
            <a href={props.project} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </button>
        </div>
      </CSSTransition>
      <div className="project__div">
        <img className="project__img" src={props.image} alt={props.alt}></img>
      </div>
      {/* <hr className="project__hr"></hr> */}
      {printIcons()}
      {/* <small className="project__text--color project__text--small"></small> */}
      <p className="project__text--color">{props.text}</p>
    </li>
  );
}

export default Project;
