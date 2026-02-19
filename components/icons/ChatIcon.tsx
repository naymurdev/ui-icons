import { motion } from 'motion/react';

const bubbleVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.25, repeat: Infinity, repeatType: 'mirror' } },
} as const;

const strokeVariants = {
  idle: { pathLength: 1 },
  hover: { pathLength: 0.7, transition: { duration: 0.3, repeat: Infinity, repeatType: 'mirror' } },
} as const;

export function ChatIcon() {
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
      variants={bubbleVariants}
    >
      <motion.path
        variants={strokeVariants}
        d='M7 9h6M7 12h4M4 7.5A3.5 3.5 0 0 1 7.5 4h9A3.5 3.5 0 0 1 20 7.5v5A3.5 3.5 0 0 1 16.5 16H10l-4 4v-4.5A3.5 3.5 0 0 1 4 12.5v-5Z'
      />
    </motion.svg>
  );
}
