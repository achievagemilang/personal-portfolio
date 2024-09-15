'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  // Split words into lines based on newline characters
  let lines = words.split('\n').map((line) => line.split(' '));
  console.log(`console: ${lines}`);

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderLines = () => {
    return (
      <motion.div ref={scope}>
        {lines.map((line, lineIdx) => (
          <motion.div key={lineIdx} className='mb-2'>
            {line.map((word, wordIdx) => (
              <motion.span
                key={word + wordIdx}
                className={` ${
                  wordIdx > 2 ? 'text-purple' : 'text-black dark:text-white'
                } opacity-0`}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className='my-4'>
        <div className='leading-snug tracking-wide text-black dark:text-white'>
          {renderLines()}
        </div>
      </div>
    </div>
  );
};
