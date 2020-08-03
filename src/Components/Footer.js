import React from 'react';

const Footer = () => {
  return (
      <footer>
        <div id="social">
              <div className='linkedin'>
                <a href="https://www.linkedin.com/in/yury-misiyevich/">
                  <i className="fa fa-phone" aria-hidden="true"/>
                </a>
              </div>
              <div className='footermail'>e-mail:
                <a href={`mailto:misiyevich@gmail.com" type='email'`}>misiyevich@gmail.com</a>
              </div>
        </div>
      </footer>
  );
};

export default Footer;