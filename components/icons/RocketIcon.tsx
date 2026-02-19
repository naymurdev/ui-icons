import { motion } from 'motion/react';

const rocketVariants = {
  idle: { y: 0 },
  hover: { y: -2, transition: { duration: 0.25, repeat: Infinity, repeatType: 'mirror' } },
};

const flameVariants = {
  idle: { scaleY: 1, opacity: 0.7 },
  hover: { scaleY: 1.4, opacity: 1, transition: { duration: 0.2, repeat: Infinity, repeatType: 'mirror' } },
};

export function RocketIcon() {
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
      variants={rocketVariants}
    >
      <motion.path d='M12 2c3.5 1.5 5.5 5.8 5 10l-5 5-5-5c-.5-4.2 1.5-8.5 5-10Z' />
      <motion.circle cx='12' cy='9' r='2' />
      <motion.path d='M8 16l-2 4 4-2' />
      <motion.path
        variants={flameVariants}
        d='M12 17c1 1 1.5 2.5 1.5 4-1.5-.2-2.5-1.2-3-2.5-.3-.7-.3-1.3 0-1.5.5-.4 1-.3 1.5 0Z'
      />
    </motion.svg>
  );
}
