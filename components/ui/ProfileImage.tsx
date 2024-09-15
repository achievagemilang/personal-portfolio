'use client';

import React, { useState, useEffect } from 'react';

const ProfileImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='mb-5 flex items-center justify-center'>
      <div className='relative'>
        <div className='animate-fadeIn'>
          <img
            alt='Achieva Futura Gemilang'
            width='192'
            height='192'
            decoding='async'
            className='animate-floating h-24 w-24 rounded-full border-white object-cover shadow-xl'
            style={{ color: 'transparent' }}
            src={'/achieva-portrait.jpg'}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
