'use client';

import { BellIcon } from '@/components/icons/BellIcon';
import { ChatIcon } from '@/components/icons/ChatIcon';
import { CloudSyncIcon } from '@/components/icons/CloudSyncIcon';
import { CompassIcon } from '@/components/icons/CompassIcon';
import { HeartPulseIcon } from '@/components/icons/HeartPulseIcon';
import { LightningIcon } from '@/components/icons/LightningIcon';
import { RocketIcon } from '@/components/icons/RocketIcon';
import { SearchIcon } from '@/components/icons/SearchIcon';
import { ShieldIcon } from '@/components/icons/ShieldIcon';
import { SparkleIcon } from '@/components/icons/SparkleIcon';
import { AnimatedIconCard } from './AnimatedIconCard';

const cards = [
  {
    title: 'Smart Chat',
    description: 'Animated message bubble with stroke draw.',
    icon: <ChatIcon />,
  },
  {
    title: 'Shielded Data',
    description: 'Tilted shield + checkmark draw.',
    icon: <ShieldIcon />,
  },
  {
    title: 'Fast Search',
    description: 'Zooming lens with rotating handle.',
    icon: <SearchIcon />,
  },
  {
    title: 'Sparkle Boost',
    description: 'Twisting sparkle with twinkling dots.',
    icon: <SparkleIcon />,
  },
  {
    title: 'Launch',
    description: 'Lift-off rocket with flickering flame.',
    icon: <RocketIcon />,
  },
  {
    title: 'Pulse Care',
    description: 'Beating heart with animated pulse line.',
    icon: <HeartPulseIcon />,
  },
  {
    title: 'Alerts',
    description: 'Swinging bell with a subtle clapper bounce.',
    icon: <BellIcon />,
  },
  {
    title: 'Cloud Sync',
    description: 'Cloud lift with rotating sync arrows.',
    icon: <CloudSyncIcon />,
  },
  {
    title: 'Compass',
    description: 'Rotating compass with a scaling needle.',
    icon: <CompassIcon />,
  },
  {
    title: 'Lightning',
    description: 'Punchy bolt with sparking accents.',
    icon: <LightningIcon />,
  },
];

export function AnimatedIconLibrary() {
  return (
    <section className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
      {cards.map((card) => (
        <AnimatedIconCard key={card.title} {...card} />
      ))}
    </section>
  );
}
