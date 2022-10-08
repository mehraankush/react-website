import React from 'react';
import  {motion} from 'framer-motion'
import './header.scss';
import {images} from '../../constants'
import {AppWrap} from '../../wrapper';

const scaleVarians ={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition :{
      duration: 1,
      ease : 'easeInOut'
    }
  }
}

const header = () => {
  return (
    <div  className='app__header app__flex'>
     <motion.div
     whileInView={{x:[-100,0],opacity:[0,1]}}
     transition={{duration:0.5}}
     className='app__header-info'>

      <div className='app__header-badge'>
           <div className='badge-cmp app__flex'>
               <span>👋</span>
               <div style={{marginLeft:20}}>
                   <p className='p-text'>Hello ,I am</p>
                   <h1 className='head-text'>Ankush Mehra</h1>
               </div>
           </div>
           <div className='tag-cmp app__flex'>
            <p className='p-text'>Web devloper</p>
            <p className='p-text'>open source</p>
           </div>
      </div>
     </motion.div>

     <motion.div
         whileInView={{opacity:[0,1]}}
         transition={{duration:0.5,delayChildren:0.5}}
         className='app__header-img' 
    >
     <img src={images.whiteShirt}></img>
        <motion.img
          whileInView={{scale:[0,1]}}
          transition={{duration:0.5,ease:'easeInOut'}}
          src={images.circle}
          alt="profile_circle"
          className ="overlay_circle"
        />
     </motion.div>
     <motion.div
      variants={scaleVarians}
      whileInView ={scaleVarians.whileInView}
      className='app__header-circles'
     >
       {[images.git,images.react,images.javascript,images.css].map((circle,index)=>(
         <div className='circle-cmp app__flex' key={'circle-${index}'}>
          <img src={circle} alt="circle" />
         </div>
       ))}    
     </motion.div>
    </div>
  )
}

export default AppWrap(header, 'home');