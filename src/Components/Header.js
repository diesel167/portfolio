import React from 'react';
import { Link } from 'react-router-dom';


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
            <Link to='/'>Home</Link>
          </div>
          <div className="nav-item">
            <Link to='/about'>About</Link>
          </div>
          <div className="nav-item">
            <Link to='/contact'>Contact</Link>
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