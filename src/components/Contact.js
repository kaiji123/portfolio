import React from 'react';
import { Link } from 'react-router-dom';
import EmailButton from './EmaiButton';
import './Contact.css'
const Contact = () => {
  return (
    <section>
      <h2>Contact Me</h2>

 

    
    <a href="https://www.linkedin.com/in/kai-yi-ji-048b91210" target="_blank" rel="noopener noreferrer" className='linkedin'>
        Visit LinkedIn
    </a>
    <br/>

 
      <EmailButton email="kejinko012@gmail.com" />
    </section>
  );
};

export default Contact;
