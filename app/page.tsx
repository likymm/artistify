'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto flex h-screen items-center justify-center bg-white">
        <Image src="/artistify.svg" alt="Artistify.js Logo" width={250} height={60} priority />
      </div>
    </main>
  );
}
