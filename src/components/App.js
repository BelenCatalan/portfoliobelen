import React, { useEffect, useState } from 'react';
import Home from './Home';
import About from './Sobre-mi';
import Menu from './Menu';
import Footer from './Footer';
import '../stylesheets/App.scss';
import Portfolio from './Portfolio';
import Contact from './Contacto';
import { Route, Switch, withRouter, BrowserRouter, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// import '../stylesheets/styles.css';

function App() {
  const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>
          <Redirect exact from="/portfoliobelen/" to="/Home" />
          <Route path="/Home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}>
            {/* <Contact handleContactText={handleContactText} formImput={formImput}/> */}
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

  return (
    // <div className="">
    <>
      <BrowserRouter>
        <header className="">
          <Menu />
        </header>
        <main className="">
          <div className=" main__background App">
            {/* <Redirect from="/" to="/home" /> */}
            <AnimatedSwitch />
          </div>
        </main>
      </BrowserRouter>
      <Footer />
    </>
    /* </div> */
  );
}

export default App;
