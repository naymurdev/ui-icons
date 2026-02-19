import { motion } from 'motion/react';

const lensVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.25 } },
};

const handleVariants = {
  idle: { rotate: 0, x: 0, y: 0 },
  hover: { rotate: 12, x: 1.5, y: 1.5, transition: { duration: 0.25 } },
};

export function SearchIcon() {
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
    >
      <motion.circle variants={lensVariants} cx='11' cy='11' r='6' />
      <motion.path variants={handleVariants} d='m16 16 4 4' />
    </motion.svg>
  );
}
