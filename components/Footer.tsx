import { FaLocationArrow } from 'react-icons/fa6';

import { socialMedia } from '@/data';
import MagicButton from './ui/MagicButton';

const Footer = () => {
  return (
    <footer className='mb-[100px] mt-20 w-full pb-10 md:mb-5' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Want to <span className='text-purple'>collaborate?</span>
        </h1>
        <p className='my-5 text-center text-white-200 md:mt-10'>
          Contact me on achievafuturagemilang@gmail.com or reach out by using
          this button below.
        </p>
        <a href='mailto:achievafuturagemilang@gmail.com'>
          <MagicButton
            title='Reach out directly'
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
      <div className='mt-16 flex flex-col items-center justify-between'>
        <div className='mb-5 flex flex-col items-center space-y-2 text-center'>
          <p className='text-base font-normal'>
            © 2024 Achieva Futura Gemilang. All rights reserved.
          </p>
          <p className='text-sm font-thin'>
            Special Thanks to{' '}
            <span className='font-light'>
              <a href='https://www.youtube.com/@javascriptmastery'>JSMastery</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
