import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import background from '../assets/background.png';
import profilePicture from '../assets/profile-picture.jpg';

const Home = () => {
  return (
<div name='home' className= 'w-full h-screen bg-[#454646]' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
  <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8'>
              <div className='sm:text-left pt-10 pb-2 pl-10'>
                <p className='text-blue-300 pt-20'>Hi, I am</p>
                <h1 className='text-1xl sm:text-4xl font-bold text-[#ccd6f6]'>Rifhat Akther Chowdhury</h1>
                <h1 className='text-2xl sm:text-5xl font-bold text-[#8fa7ee] hover:ml-[-20px] duration-300'>Web Developer.</h1>
              </div>    
    </div>  
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
      <div className='sm:text-left text-1xl font-bold py-10 pl-5'>
        <p>From concept to deployment, I’m dedicated to delivering web solutions that exceed expectations. Let’s collaborate and create something amazing.</p>
      </div>
      <div className='pl-20 pb-30'>
        <img src={profilePicture} alt='Profile Picture' className='w-80 h-80 rounded-full mr-8' />
      </div>
    </div> 
  </div>
</div>
  );
};

export default Home;
