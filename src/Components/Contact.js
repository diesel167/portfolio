import React, { useState } from 'react';


const Contact = () => {
  let [name, setName] = useState('Noname');
  let [email, setEmail] = useState('');
  let [subject, setSubject] = useState('Nosubject');
  let [body, setBody] = useState('');

  return (
      <>
        <div className="main contact">
          <h1>Contact me</h1>
        </div>
        <div className='form'>
            <legend>
              <h4>Get In Touch</h4>
            </legend>
            <input className="input-text"
                   type="text"
                   placeholder="Name"
                   onChange={(e)=>{
                     setName(e.target.value);
                   }}/>
            <input type="email"
                   onChange={(e)=>{
                     setEmail(e.target.value);
                   }}
                   placeholder="Email"/>
            <input type="text"
                   onChange={(e)=>{
                     setSubject(e.target.value);
                   }}
                   placeholder="Subject"/>
            <textarea name="message"
                      form="form"
                      cols="30"
                      rows="10"
                      onChange={(e)=>{
                        setBody(e.target.value);
                      }}
                      placeholder="Write your message here..."/>

              <a className='btn' href={`mailto:misiyevich@gmail.com?subject=${subject}
              &body=Hello, i am ${name}.%0D%0A%0D%0A ${body} 
              %0D%0A%0D%0A From ${email} `}>send<button className="button"
                                                        onClick={()=>{
                                                          console.log('fef');
                                                        }}
                                                        type="submit"/></a>
          </div>
      </>
  );
};

export default Contact;