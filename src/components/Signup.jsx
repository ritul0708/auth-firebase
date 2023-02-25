import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Create an Account</h1>
        <p className='py-2'>
          Already have an account? 
          <Link to='/signin' className='underline'>Sign In</Link>
        </p>
      </div>
      <form action="">
      <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Full Name</label>
          <input className='border-2 p-3' type="text" />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email</label>
          <input className='border-2 p-3' type="email" />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input className='border-2 p-3' type="password" />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Confirm Passwordd</label>
          <input className='border-2 p-3' type="password" />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-400 w-full p-4 my-2 text-white'>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup