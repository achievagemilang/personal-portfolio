import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow, FaReadme } from 'react-icons/fa6';
import ProfileImage from './ui/ProfileImage';
import { socialMedia } from '@/data';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className='-left-10 -top-40 h-screen md:-left-32 md:-top-20'
          fill='white'
        />
        <Spotlight
          className='left-full top-10 h-[80vh] w-[50vw]'
          fill='purple'
        />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className='absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]'>
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100'></div>
      </div>

      <div className='relative z-10 my-20 flex justify-center'>
        <div className='md:max-2-xl flex max-w-[89vw] flex-col items-center justify-center lg:max-w-[60vw]'>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Software and Business - I Make Ideas Happen.'
          />

          <TextGenerateEffect
            className='text-blue=100 mb-5 mt-10 max-w-80 text-center uppercase tracking-widest'
            words='Greetings, Everyone!'
          />

          <ProfileImage />

          <TextGenerateEffect
            className='text-blue=100 text-center tracking-widest md:text-xl'
            words="I'm Cip, a Software Engineer and Business Enthusiast."
          />

          <div className='animate-fadeIn mt-5 flex flex-wrap items-center justify-center gap-6 md:gap-3'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://drive.google.com/file/d/1a0ICiy-b5fGVuXVcG2082sisLN6e9nO6/view?usp=sharing'
              className='mx-4 flex items-center md:mx-8'
            >
              <MagicButton title='My CV' icon={<FaReadme />} position='right' />
            </a>

            {socialMedia.map((info) => (
              <div
                key={info.id}
                className='saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter'
                style={{ height: '40px', width: '40px' }}
              >
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={info.link}
                  className='flex h-full w-full items-center justify-center'
                >
                  <img src={info.img} alt='icons' width={20} height={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
