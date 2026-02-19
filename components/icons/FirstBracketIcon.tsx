import { motion } from 'motion/react';

const leftBracketVariants = {
  idle: { x: 0, opacity: 0.9 },
  hover: {
    x: -2,
    opacity: 1,
    transition: { duration: 0.35, repeat: Infinity, repeatType: 'mirror' },
  },
} as const;

const rightBracketVariants = {
  idle: { x: 0, opacity: 0.9 },
  hover: {
    x: 2,
    opacity: 1,
    transition: { duration: 0.35, repeat: Infinity, repeatType: 'mirror' },
  },
} as const;

export function FirstBracketIcon() {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-2 -2 28 28'
      width={32}
      height={32}
      fill='none'
      stroke='currentColor'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
      style={{ overflow: 'visible' }}
    >
      <motion.path
        variants={leftBracketVariants}
        d='M6 3C3.58901 4.93486 2 8.24345 2 12C2 15.7565 3.58901 19.0651 6 21'
      />
      <motion.path
        variants={rightBracketVariants}
        d='M18 3C20.411 4.93486 22 8.24345 22 12C22 15.7565 20.411 19.0651 18 21'
      />
    </motion.svg>
  );
}
