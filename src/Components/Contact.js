import React from 'react';


const Contact = () => {
  return (
      <>
        <div className="main contact">
          <h1>Contact me</h1>
        </div>
        <div className='form'>
          <legend>
            <h4>Get In Touch</h4>
          </legend>
          <input className="input-text" type="text" placeholder="Name(Required)" required/>
          <input type="email" placeholder="Email(Required)" required/>
          <input type="text" placeholder="Subject"/>
          <textarea name="message" form="form" cols="30" rows="10"
                    placeholder="Write your message here..."/>
          <button className="button" type="submit">
            <a href="mailto:misiyevich@gmail.com?subject=&body=Hello,%0D%0A%0D%0AHere is the link to the PDF Brochure">send</a>
          </button>
        </div>
      </>
  );
};

export default Contact;