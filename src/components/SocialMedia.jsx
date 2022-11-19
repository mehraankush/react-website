import React from 'react'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si';
import {AiFillGithub} from 'react-icons/ai';
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
              <a href={'https://www.codechef.com/users/mehra_69'} target={'_blank'}><SiCodechef/></a>
           </div>
    </div>
  )
}

export default SocialMedia