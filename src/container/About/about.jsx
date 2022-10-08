import React ,{useEffect,useState} from 'react';
import './about.scss';
import {images} from '../../constants'
import {motion} from 'framer-motion'
import {AppWrap} from '../../wrapper'
// import { client } from '../../client';
import { urlFor,client } from '../../client';

//static data
// const abouts =[
//   {title: 'web Devlepment',description :'I am a Good Developer.', imgUrl:images.about01},
//   {title: 'web designer',description :'I am a Good designer.', imgUrl:images.about02},
//   {title: 'competitive coder',description :'I am a Good coder.', imgUrl:images.about03},
//   {title: 'competitive coder',description :'I am a Good coder.', imgUrl:images.about04},
// ];
const About = () => {
   const [abouts, setabouts] = useState([]);
   useEffect(() => {
     const query = '*[_type == "abouts"]';

     client.fetch(query)
     .then((data) => setabouts(data))
   }, [])
   
  return (
   <> 
     <h2 className='head-text'>I know that<span>Good Devlepment</span><br/> means <span>Good Bussiness</span></h2>

     <div className='app__profiles'>
         {abouts.map((about,index) =>(

            <motion.div
            whileInView ={{opacity:1}}
            whileHover ={{scale:1.1}}
            transition = {{duration:0.5,type:'tween'}}
            className='app__profile-item'
            key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={urlFor.title} />
              <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop:10}}>{about.description}</p>
            </motion.div>
         ))}
     </div>
   </>
  )
}

export default AppWrap(About, 'about');