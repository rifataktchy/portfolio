import React from 'react';
import background from '../assets/background.jpg';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#454646] flex flex-col justify-center items-center p-6'>
      {/* Upper Section */}
      <div className='flex flex-col items-center max-w-[700px] w-full'>
        <form method='POST' action="https://getform.io/f/7be51bc1-6689-46ce-aba4-7b08687ce34d" className='flex flex-col w-full'>
          <div className='py-2'>
            <p className='text-4xl font-bold inline text-white'>Contact</p>
            <p className='text-white py-2'>Submit the form below</p>
          </div>
          <input className='bg-[#a4a4a5] p-2 text-black' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#a5a4a4] text-black' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#a8a9aa] p-2 py-2 text-black' name="message" rows="8" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-gray-500 px-6 py-4 my-1 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>

    </div>
  )
}

export default Contact;
