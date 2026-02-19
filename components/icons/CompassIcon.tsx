import { motion } from 'motion/react';

const compassVariants = {
  idle: { rotate: 0 },
  hover: { rotate: 30, transition: { duration: 0.35, repeat: Infinity, repeatType: 'mirror' } },
} as const;

const needleVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.15, transition: { duration: 0.25, repeat: Infinity, repeatType: 'mirror' } },
} as const;

export function CompassIcon() {
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
      variants={compassVariants}
    >
      <motion.circle cx='12' cy='12' r='8' />
      <motion.path
        variants={needleVariants}
        d='M14.5 9.5 12 14.5 9.5 12l5-2.5Z'
      />
      <motion.circle cx='12' cy='12' r='1' />
    </motion.svg>
  );
}
