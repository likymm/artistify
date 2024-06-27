'use client';

import Hero from './components/Hero';
import Service from './components/Service';
import Navigation from './components/ui/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed right-0 top-0 z-10 mt-5 flex h-screen items-center">
        <Navigation isIcons />
      </div>
      <Hero />
      <Service />
    </main>
  );
}
