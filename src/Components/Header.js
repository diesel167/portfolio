import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//            <Link to='/'>Home</Link>
const Header = () => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(`&#9776`, 'text/html').body.textContent;
  return (
      <header>
        <div className="container">
          <div className="nav-item logo">
            <Link to='/'>Yury M.</Link>
          </div>
          <div className="nav-item">
            <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
          </div>
          <div className="nav-item">
            <NavLink exact={true} activeClassName='is-active' to='/about'>About</NavLink>
          </div>
          <div className="nav-item">
            <NavLink exact={true} activeClassName='is-active' to='/contact'>Contact</NavLink>
          </div>
          <div className="mobile-header">
            <div className="ham-icon" onClick={()=>{

            }}>
              {decodedString}
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;