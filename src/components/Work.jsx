import React from 'react';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#454646] text-gray-300'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-black-300'>Projects</p>
            <p className='py-6'>Check out some of our recent projects</p>
          </div>
          {/* Container*/}
          <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-6'>
             {/* Grid item*/}
             <div style={{ backgroundImage: `url(${work1})`, backgroundSize: 'cover' }} 
            className='h-[170px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              {/* hover effetcs*/}
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-pwhite tracking-wider'>
                  API Application Project
                </span>

                <div className="pt-10 text-center ">
                {/* eslint-disable-next-line */}
                <a href='https://github.com/rifataktchy/weather-app' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href='https://rifataktchy.github.io/weather-app/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
                </a>
                </div>

              </div>
            </div>

            <div style={{ backgroundImage: `url(${work2})`, backgroundSize: 'cover' }} 
            className='h-[150px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              {/* hover effetcs*/}
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-white tracking-wider'>
                  javaScript Application Project
                </span>
                
                <div className="pt-10 text-center ">
                {/* eslint-disable-next-line */}
                <a href='https://github.com/rifataktchy/tic-tac-toe' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg ">
                  Code
                </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href='https://rifataktchy.github.io/tic-tac-toe/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
            </div>

            <div style={{ backgroundImage: `url(${work3})`, backgroundSize: 'cover' }} 
            className='h-[150px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              {/* hover effetcs*/}
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-gray-600 tracking-wider'>
                  React Application Project
                </span>
                <div className="pt-10 text-center ">
                {/* eslint-disable-next-line */}
                <a href='https://github.com/rifataktchy/decorella-website' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray text-black-700 font-bold text-lg hover:bg-gray-600">
                  Code
                </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href='https://rifataktchy.github.io/decorella-website/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-red text-white-700 font-bold text-lg  hover:bg-gray-600">
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