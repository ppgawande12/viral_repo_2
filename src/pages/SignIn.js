import React, { useState } from 'react';
import dashBoard from './images/dash-mockup.jpg';
import { supabase } from './client';

// Components
import Navbar from './Navbar';

const SignIn = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const backgroundImageUrl =
    'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/summer-background-abstract-background-wallpaper-use-for-presentation_HDDYoJOhMg_thumb.jpg';

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      alert('Check your email to verify');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <Navbar />
      <div className='flex flex-row justify-between overflow-hidden fixed'>
        <div className='flex flex-row justify-between w-screen h-screen'>
          <form
            className='my-10 ml-10 align-items-center'
            onSubmit={handleSubmit}
          >
            <h1 className='font-bold text-3xl'>Sign in</h1>
            <br />
            <label> FullName </label>
            <br />
            <br />
            <input
              name='fullName'
              type='text'
              placeholder='FullName'
              className='border-4 border-black rounded-lg'
              onChange={handleChange}
            />
            <br />
            <label> Email Address </label>
            <br />
            <br />
            <input
              name='email'
              type='text'
              placeholder='Your@email.com'
              className='border-4 border-black rounded-lg'
              onChange={handleChange}
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <br />
            <input
              name='password'
              type='password'
              placeholder='Your Password'
              className='border-4 border-black rounded-lg'
              onChange={handleChange}
            />
            <br />
            <br />
            <button
              className='border-2 border-black rounded-full w-full h-10 bg-blue-900 text-white'
              type='submit'
            >
              Sign in
            </button>
          </form>
        </div>
        <div
          className='flex flex-col justify-center overflow-hidden bg-center bg-cover col-lg-6 max-lg:hidden'
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}
        >
          <img
            src={dashBoard}
            alt='MagicAI Dashboard Mockup'
            className='rounded-[36px] shadow-[0_24px_88px_rgba(0,0,0,0.55)] translate-x-[27%]'
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;