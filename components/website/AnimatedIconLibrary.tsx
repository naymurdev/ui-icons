import { AnimatedIconCard } from "./AnimatedIconCard";
import { BellIcon } from "./icons/BellIcon";
import { ChatIcon } from "./icons/ChatIcon";
import { CloudSyncIcon } from "./icons/CloudSyncIcon";
import { CompassIcon } from "./icons/CompassIcon";
import { HeartPulseIcon } from "./icons/HeartPulseIcon";
import { LightningIcon } from "./icons/LightningIcon";
import { RocketIcon } from "./icons/RocketIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { ShieldIcon } from "./icons/ShieldIcon";
import { SparkleIcon } from "./icons/SparkleIcon";

const cards = [
  {
    title: "Smart Chat",
    description: "Animated message bubble with stroke draw.",
    icon: <ChatIcon />,
  },
  {
    title: "Shielded Data",
    description: "Tilted shield + checkmark draw.",
    icon: <ShieldIcon />,
  },
  {
    title: "Fast Search",
    description: "Zooming lens with rotating handle.",
    icon: <SearchIcon />,
  },
  {
    title: "Sparkle Boost",
    description: "Twisting sparkle with twinkling dots.",
    icon: <SparkleIcon />,
  },
  {
    title: "Launch",
    description: "Lift-off rocket with flickering flame.",
    icon: <RocketIcon />,
  },
  {
    title: "Pulse Care",
    description: "Beating heart with animated pulse line.",
    icon: <HeartPulseIcon />,
  },
  {
    title: "Alerts",
    description: "Swinging bell with a subtle clapper bounce.",
    icon: <BellIcon />,
  },
  {
    title: "Cloud Sync",
    description: "Cloud lift with rotating sync arrows.",
    icon: <CloudSyncIcon />,
  },
  {
    title: "Compass",
    description: "Rotating compass with a scaling needle.",
    icon: <CompassIcon />,
  },
  {
    title: "Lightning",
    description: "Punchy bolt with sparking accents.",
    icon: <LightningIcon />,
  },
];

export function AnimatedIconLibrary() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 20,
      }}
    >
      {cards.map((card) => (
        <AnimatedIconCard key={card.title} {...card} />
      ))}
    </section>
  );
}
