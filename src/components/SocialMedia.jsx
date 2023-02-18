import React from 'react'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
const SocialMedia = () => {
  return (
    <div className='app__social'>
           <div>
                <a href={'https://www.instagram.com/mehra_69/'}  target={'_blank'}><BsInstagram/></a> 
           </div>
               
           <div>
             <a href={'https://github.com/mehraankush' } target={'_blank'}><AiFillGithub /></a> 
           </div>
           <div>
              <a href={'https://www.linkedin.com/in/ankush-mehra-9a57a1233/'} target={'_blank'}><AiFillLinkedin/></a>
           </div>
    </div>
  )
}

export default SocialMedia