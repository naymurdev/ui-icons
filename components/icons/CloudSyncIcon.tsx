import { motion } from 'motion/react';

const cloudVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.25, repeat: Infinity, repeatType: 'mirror' } },
} as const;

const syncVariants = {
  idle: { rotate: 0 },
  hover: { rotate: 180, transition: { duration: 0.5, repeat: Infinity, ease: 'linear' } },
} as const;

export function CloudSyncIcon() {
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
      variants={cloudVariants}
    >
      <motion.path d='M7 16a4 4 0 0 1 0-8 5 5 0 0 1 9.8 1.5A3.5 3.5 0 0 1 17 16H7Z' />
      <motion.path variants={syncVariants} d='M9 12l-2 2 2 2M15 16l2-2-2-2' />
    </motion.svg>
  );
}
