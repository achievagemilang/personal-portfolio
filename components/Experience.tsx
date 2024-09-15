import React from 'react';

import {
  companies,
  organizationalExperience,
  testimonials,
  workExperience,
} from '@/data';
import { Button } from './ui/MovingBorders';
import { InfiniteMovingCards } from './ui/InfiniteCards';

const Experience = () => {
  return (
    <div className='w-full py-20' id='experience'>
      <h1 className='heading'>
        My various working
        <span className='text-purple'> experiences.</span>
      </h1>

      <div className='mt-12 flex justify-center'>
        <div className='grid max-w-xl grid-cols-1 items-center justify-center gap-10'>
          {workExperience.concat(organizationalExperience).map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius='1.75rem'
              style={{
                background: 'rgb(4,7,29)',
                backgroundColor:
                  'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className='flex-1 border-neutral-200 text-black dark:border-slate-800 dark:text-white'
            >
              <div className='flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10'>
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className='w-16 rounded-full md:w-20 lg:w-32'
                />
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl font-bold md:text-2xl'>
                    {card.title}
                  </h1>
                  <h5 className='text-start font-semibold text-white-100'>
                    {card.company}
                  </h5>
                  <p className='mt-3 text-start font-normal text-white-100'>
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
