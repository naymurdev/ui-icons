'use client';

import { BellIcon } from '@/components/icons/BellIcon';
import { FirstBracketIcon } from '@/components/icons/FirstBracketIcon';
import { AnimatedIconCard } from './AnimatedIconCard';

const cards = [
  { title: 'bell', icon: <BellIcon /> },
  { title: 'first-bracket', icon: <FirstBracketIcon /> },
];

export function AnimatedIconLibrary() {
  return (
    <section className='grid gap-4 sm:grid-cols-2'>
      {cards.map((card) => (
        <AnimatedIconCard key={card.title} {...card} />
      ))}
    </section>
  );
}
