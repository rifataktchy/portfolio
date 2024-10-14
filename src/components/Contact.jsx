import React from 'react';
import background from '../assets/background.png';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#6e6f6f] flex flex-col justify-center items-center p-6'>
      {/* Upper Section */}
      <div className='flex flex-col items-center justify-center max-w-[700px] w-full h-full'>
        <form method='POST' action="https://getform.io/f/7be51bc1-6689-46ce-aba4-7b08687ce34d" className='flex flex-col w-full'>
          <div className='py-2'>
            <p className='text-4xl font-bold inline text-white'>Contact</p>
            <p className='text-white py-2'>Submit the form below</p>
          </div>
          <input className='bg-[#dadada] p-2 text-black' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#dadada] text-black' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#dadada] p-2 py-2 text-black' name="message" rows="8" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-[#6494ac] px-6 py-4 my-1 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>

    </div>
  )
}

export default Contact;