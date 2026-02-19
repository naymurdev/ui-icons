import { motion } from 'motion/react';

const sparkleVariants = {
  idle: { rotate: 0, scale: 1 },
  hover: { rotate: 20, scale: 1.1, transition: { duration: 0.3 } },
};

const dotVariants = {
  idle: { opacity: 0.6, scale: 1 },
  hover: { opacity: 1, scale: 1.4, transition: { duration: 0.25 } },
};

export function SparkleIcon() {
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
      variants={sparkleVariants}
    >
      <motion.path d='m12 3 1.8 4.7L18 9.5l-4.2 1.8L12 16l-1.8-4.7L6 9.5l4.2-1.8L12 3Z' />
      <motion.circle variants={dotVariants} cx='5' cy='5' r='1' />
      <motion.circle variants={dotVariants} cx='19' cy='6' r='1' />
      <motion.circle variants={dotVariants} cx='6' cy='19' r='1' />
    </motion.svg>
  );
}
