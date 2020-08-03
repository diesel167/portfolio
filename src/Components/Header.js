import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(`&#9776`, 'text/html').body.textContent;
  let [menuClicked, setMenuClicked] = useState(false);
  let [iconClass, setIconClass] = useState('ham-icon');
  let [humClassActive, setHumClassActive] = useState('nav-item');
  let [containerGrid, setContainerGrid] = useState('container');
  useEffect(() => {
    if (menuClicked) {
      setIconClass('ham-icon rotate');
      setHumClassActive('nav-item hum');
      setContainerGrid('container mobile')
    }
    else {
      setIconClass('ham-icon');
      setHumClassActive('nav-item');
      setContainerGrid('container')
    }
  }, [menuClicked]);
  return (
      <header>
        <div className={containerGrid}>
          <div className="nav-item logo">
            <Link to='/'>Yury M.</Link>
          </div>
          <div className={humClassActive}>
            <NavLink exact={true}
                     onClick={()=>{
                       setMenuClicked(false);
                     }}
                     activeClassName='is-active'
                     to='/'>Home</NavLink>
          </div>
          <div className={humClassActive}>
            <NavLink exact={true}
                     onClick={()=>{
                       setMenuClicked(false);
                     }}
                     activeClassName='is-active'
                     to='/about'>About</NavLink>
          </div>
          <div className={humClassActive}>
            <NavLink exact={true}
                     onClick={()=>{
                       setMenuClicked(false);
                     }}
                     activeClassName='is-active'
                     to='/contact'>Contact</NavLink>
          </div>
          <div className="mobile-header">
            <div className={iconClass} onClick={()=>{
              setMenuClicked(!menuClicked);
            }}>
              {decodedString}
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;