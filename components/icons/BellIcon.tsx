import { motion } from 'motion/react';

const bellVariants = {
  idle: { rotate: 0 },
  hover: { rotate: [-8, 8, -4, 4, 0], transition: { duration: 0.45 } },
};

const clapperVariants = {
  idle: { y: 0 },
  hover: { y: 2, transition: { duration: 0.2 } },
};

export function BellIcon() {
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
      variants={bellVariants}
    >
      <motion.path d='M6 10a6 6 0 0 1 12 0v4l2 2H4l2-2v-4Z' />
      <motion.path variants={clapperVariants} d='M10 18a2 2 0 0 0 4 0' />
    </motion.svg>
  );
}
