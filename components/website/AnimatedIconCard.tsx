'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface AnimatedIconCardProps {
  title: string;
  icon: ReactNode;
}

const cardVariants = {
  idle: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: {
    y: -6,
    boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

export function AnimatedIconCard({ title, icon }: AnimatedIconCardProps) {
  return (
    <motion.article
      initial='idle'
      animate='idle'
      whileHover='hover'
      variants={cardVariants}
      className='rounded-2xl border border-neutral-800 bg-neutral-950 px-5 py-7'
    >
      <div className='mb-6 flex items-center justify-center text-neutral-100'>{icon}</div>
      <h3 className='text-center text-base font-medium text-neutral-100'>{title}</h3>
    </motion.article>
  );
}
