import { motion } from 'motion/react';

const boltVariants = {
  idle: { y: 0 },
  hover: { y: -2, transition: { duration: 0.2, repeat: Infinity, repeatType: 'mirror' } },
};

const sparkVariants = {
  idle: { opacity: 0.6, scale: 1 },
  hover: { opacity: 1, scale: 1.3, transition: { duration: 0.2, repeat: Infinity, repeatType: 'mirror' } },
};

export function LightningIcon() {
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
      variants={boltVariants}
    >
      <motion.path d='M13 2 6 13h5l-1 9 7-12h-5l1-8Z' />
      <motion.path variants={sparkVariants} d='M5 4 3.5 6M19 18l1.5 2' />
    </motion.svg>
  );
}
