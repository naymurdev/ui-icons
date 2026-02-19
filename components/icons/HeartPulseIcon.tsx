import { motion } from 'motion/react';

const heartVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.25 } },
};

const pulseVariants = {
  idle: { pathLength: 0.6, opacity: 0.6 },
  hover: { pathLength: 1, opacity: 1, transition: { duration: 0.3 } },
};

export function HeartPulseIcon() {
  return (
    <motion.svg
      width={32}
      height={32}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
      variants={heartVariants}
    >
      <motion.path d='M12 20s-6-4.5-8-8.5C2.5 8 4.5 5 7.5 5c2 0 3.5 1.2 4.5 2.8C13 6.2 14.5 5 16.5 5 19.5 5 21.5 8 20 11.5 18 15.5 12 20 12 20Z' />
      <motion.path variants={pulseVariants} d='M5 12h3l1.5-3 2.5 6 1.5-3h5' />
    </motion.svg>
  );
}
