import React , {useEffect,useState} from 'react';
import  {AiFillEye,AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';

import {AppWrap,MotionWrap} from '../../wrapper';
import {urlFor,client} from '../../client'
import './work.scss';

const Work = () => {
  const [activeFilter,setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y : 0, opacity : 1});
  const [works, setWorks] = useState([]);
  const [filterwork, setFilterwork] = useState([]);

  useEffect(() => {
   const query = '*[_type == "works"]';

   client.fetch(query)
     .then((data) => {
       setWorks(data);
       setFilterwork(data);
    })
  }, [])
  
   const handleWorkFilter =(item)=>{
    setActiveFilter(item);
    setAnimateCard([{y:100,opacity:0}]);
    
    setTimeout(()=>{
      setAnimateCard([{y:0,opacity:1}]);

      if(item === 'All'){
        setFilterwork(works);}

      else{
        setFilterwork(works.filter((works) => works.tags.includes(item)));
      }
        
    },500);
   }


  return (
    <>
         <h2 className='head-text'>My some <span> Creative </span><br/> Glamour <span>Works</span></h2>
      
      <div className='app__works-filter'>
          {['UI/UX','Web Dev','App Dev','CP', 'All'].map((item,index) => (
            <div
              key = {index}
              onClick={() => handleWorkFilter(item)}
              className = {`app__works-filter-item app__flex p-text ${activeFilter === item ? 'item-active' :' ' }`}
              >
                {item}
             </div>
          ))}
     </div>

     <motion.div
     animate = {animateCard}
     transition = {{duration:0.5,delayChildren : 0.5}}
      className = "app__works-portfolio"
     >
       {filterwork.map((work,index) => (
        <div className='app__works-item app__flex' key ={index}>
              <div className='app__works-img app__flex'>
                <img src = {urlFor(work.imgUrl)} alt={work.name}/>
              
            <motion.div
            whileHover={{opacity: [0,1]}}
            transition = {{duration : 0.25 ,ease :'easeInOut', staggerChildren : 0.5}}
            className='app__works-hover app__flex'
            >

            <a href={work.projectLink} target ="_blank" rel = "noreferrer">
              <motion.div
              whileInView={{scale: [0,1]}}
              whileHover={{scale: [1,0.9]}}
              transition = {{duration : 0.25}}
              className='app__flex'
              >

                <AiFillEye/>
            </motion.div>
          </a>
            <a href={work.codeLink} target ="_blank" rel = "noreferrer">
              <motion.div
              whileInView={{scale: [0,1]}}
              whileHover={{scale: [1,0.9]}}
              transition = {{duration : 0.25}}
              className='app__flex'
              >
                <AiFillGithub/>
              </motion.div>
            </a>
            </motion.div>
              </div>
                <div className='app__works-content app__flex'>
                  <h4 className='bold-text'>{work.title}</h4>
                  <p className='p-text' style={{marginTop:10}}>{work.description}</p>

                  <div className='app__works-tag app__flex'>
                      <p className='p-text'>{work.tags[0]}</p>
                  </div>
                </div>
        </div>
       ))}   
     </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work,"app__works"),
  "work",
  "app__primarybg"
);