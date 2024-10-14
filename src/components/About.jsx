import React from 'react';
import background2 from '../assets/background2.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-[#6e6f6f] pt-10 lg:pl-10 text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full lg:pl-10'>
        <div className='max-w-[1000px] w-full gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline'>About Me</p>
          </div> 
        </div>
        <motion.div 
              className='max-w-[1000px] w-full  gap-8 px-4'
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>With a educational background in Management Information Systems and electronics and communication engineering, I've refined my skills in developing dynamic websites using HTML, CSS, JavaScript and React.js. My experience as a Web Developer at Crebsol Ltd. and Junior Frontend Developer in Design Source, combined with my experience as an IT teacher, has equipped me with a deep understanding of both the technical and educational aspects of technology. My career journey has been marked by a dedication to continuous learning and adapting, from designing responsive web interfaces to fostering technology-friendly learning environments. I am passionate about leveraging my expertise in technology to create impactful digital solutions and contribute to the growth of organizations.</motion.p>   
        </motion.div>
      </div>
    </div>
  )
}

export default About;

