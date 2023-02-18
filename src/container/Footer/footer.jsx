import React, { useState } from 'react';
import {SiCodechef} from 'react-icons/si';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {BsTwitter,BsInstagram} from 'react-icons/bs'


import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:mehraankush36@gmail.com" className="p-text">imdevloperr@outlook.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+918178986672" className="p-text">+91 123-456-7890</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text " type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Thoughts"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      <div className='app_social'>
           <div>
                <a href={'https://www.instagram.com/mehra_69/'}  target={'_blank'}><BsInstagram/></a> 
           </div>
               
           <div>
             <a href={'https://github.com/mehraankush' } target={'_blank'}><AiFillGithub /></a> 
           </div>
           <div>
              <a href={'https://www.codechef.com/users/mehra_69'} target={'_blank'}><SiCodechef/></a>
           </div>
           <div>
              <a href={'https://www.linkedin.com/in/ankush-mehra-9a57a1233/'} target={'_blank'}><AiFillLinkedin/></a>
           </div>
    </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__whitebg"
);