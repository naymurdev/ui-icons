'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface AnimatedIconCardProps {
  title: string;
  description: string;
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

export function AnimatedIconCard({
  title,
  description,
  icon,
}: AnimatedIconCardProps) {
  return (
    <motion.article
      initial='idle'
      animate='idle'
      whileHover='hover'
      variants={cardVariants}
      className='group rounded-2xl border border-neutral-800 bg-neutral-950 p-5 transition-colors hover:border-neutral-700'
    >
      <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-neutral-100'>
        {icon}
      </div>
      <h3 className='text-base font-semibold text-neutral-100'>{title}</h3>
      <p className='mt-1 text-sm text-neutral-400'>{description}</p>
    </motion.article>
  );
}
