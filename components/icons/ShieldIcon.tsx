import { motion } from 'motion/react';

const shieldVariants = {
  idle: { rotate: 0 },
  hover: { rotate: -8, transition: { duration: 0.25, repeat: Infinity, repeatType: 'mirror' } },
};

const checkVariants = {
  idle: { pathLength: 0.8, opacity: 0.8 },
  hover: { pathLength: 1, opacity: 1, transition: { duration: 0.3, repeat: Infinity, repeatType: 'mirror' } },
};

export function ShieldIcon() {
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
      variants={shieldVariants}
    >
      <motion.path d='M12 3 19 6v6c0 4.5-3.2 7.5-7 9-3.8-1.5-7-4.5-7-9V6l7-3Z' />
      <motion.path variants={checkVariants} d='m9 12 2 2 4-4' />
    </motion.svg>
  );
}
