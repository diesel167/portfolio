import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
function App({location}) {
  return (
    <div className="App">
      <Header/>
      <main>
        <TransitionGroup>
          <CSSTransition
              timeout={300}
              classNames='fade'
              key={location.key}>
            <Switch>
              <Route exact path='/' component={Main}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
           </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
