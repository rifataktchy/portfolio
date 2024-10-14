import React from 'react';
import background2 from '../assets/background2.png';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpeg';
import work3 from '../assets/work3.jpg';
import work4 from '../assets/work4.jpg';
import work5 from '../assets/work5.PNG';
import work6 from '../assets/work6.PNG';

const Work = () => {
  return (
    <div name='work' className='w-full h-full bg-[#6e6f6f] text-gray-300'>
       <div className='max-w-[1000px] mx-auto p-20 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#6494ac] text-black-300'>Projects</p>
            <p className='py-6'>Check out some of my recent projects</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>

          <div style={{ backgroundImage: `url(${work6})`, backgroundSize: 'cover' }} 
              className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100 pl-8 pt-3'> 
                <span className='text-2xl font-bold text-pwhite tracking-wider'>
                  Javascript real Project
                </span>
                <div className="pt-10 text-center ">
                <a href='https://github.com/rifataktchy/design-source' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
                </a>
                <a href='https://rifataktchy.github.io/design-source/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
            </div>

          <div style={{ backgroundImage: `url(${work3})`, backgroundSize: 'cover' }} 
            className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100 pl-5'> 
                <span className='text-2xl font-bold text-gray-600 tracking-wider'>
                  React Application Project
                </span>
                <div className="pt-10 text-center ">
                <a href='https://github.com/rifataktchy/decorella-website' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-700 text-white font-bold text-lg">
                  Code
                </button>
                </a>
                <a href='https://rifataktchy.github.io/decorella-website/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-700 text-white font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
          </div>

          <div style={{ backgroundImage: `url(${work2})`, backgroundSize: 'cover' }} 
            className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-white tracking-wider'>
                  javaScript Project
                </span>               
                <div className="pt-10 text-center ">
                <a href='https://github.com/rifataktchy/tic-tac-toe' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg ">
                  Code
                </button>
                </a>
                <a href='https://rifataktchy.github.io/tic-tac-toe/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
          </div>

  
          
          <div style={{ backgroundImage: `url(${work1})`, backgroundSize: 'cover' }} 
              className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100 pl-8 pt-3'> 
                <span className='text-2xl font-bold text-pwhite tracking-wider'>
                  API Application Project
                </span>
                <div className="pt-10 text-center ">
                <a href='https://github.com/rifataktchy/weather-app' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
                </a>
                <a href='https://rifataktchy.github.io/weather-app/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
            </div>
          


          
          <div style={{ backgroundImage: `url(${work5})`, backgroundSize: 'cover' }} 
            className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-gray-600 tracking-wider'>
                  Portfolio website
                </span>
                <div className="pt-10 text-center ">
                <a href='https://github.com/rifataktchy/Assignment-5' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-700 text-white font-bold text-lg">
                  Code
                </button>
                </a>
                <a href='https://rifataktchy.github.io/Assignment-5/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-700 text-white font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
          </div>

          <div style={{ backgroundImage: `url(${work4})`, backgroundSize: 'cover' }} 
            className='h-[180px] shadow-lg shadow-[#6c6c6d] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100 pl-8'> 
                <span className='text-2xl font-bold text-white-600 tracking-wider'>
                  Netfilx Clone by firebase Project
                </span>
                <div className="pt-3 text-center ">
                <a href='https://github.com/rifataktchy/netfilx-clone' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
                </a>
                <a href='https://netfilx-clone-react-ae44e.web.app/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
            </div>
          </div>
          

          </div>
        
          
       </div>
    
  )
}

export default Work;