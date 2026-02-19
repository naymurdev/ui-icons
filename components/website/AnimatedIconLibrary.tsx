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
  { title: 'chat', icon: <ChatIcon /> },
  { title: 'shield', icon: <ShieldIcon /> },
  { title: 'search', icon: <SearchIcon /> },
  { title: 'sparkle', icon: <SparkleIcon /> },
  { title: 'rocket', icon: <RocketIcon /> },
  { title: 'heart-pulse', icon: <HeartPulseIcon /> },
  { title: 'bell', icon: <BellIcon /> },
  { title: 'cloud-sync', icon: <CloudSyncIcon /> },
  { title: 'compass', icon: <CompassIcon /> },
  { title: 'lightning', icon: <LightningIcon /> },
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
