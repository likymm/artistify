import React from 'react';

import Header from './Header';
import Image from 'next/image';
import { NavId } from './ui/Navigation';
import { handleScroll } from '@/utils/Helpers';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div
      id={NavId.home}
      className="mx-auto flex max-w-7xl items-center justify-center bg-white xl:min-h-screen"
    >
      <section
        className="flex flex-col items-center px-5 py-32 text-center"
        aria-labelledby="hero-heading"
      >
        <div className="mb-10">
          <Header></Header>
        </div>
        <div className="max-w-2xl">
          <h1 id="hero-heading" className="text-3xl font-extrabold !leading-snug md:text-6xl">
            Powering the Future of Digital Experiences
          </h1>
          <p className="mt-4 font-bold text-gray-700 md:mt-8 md:text-xl">
            Innovative web solutions tailored to elevate your brand.
          </p>
          <Button
            onClick={(e) => handleScroll(e, '#' + NavId.getInTouch)}
            aria-label="Connect with us"
            className="mt-7"
          >
            Connect with us
          </Button>
        </div>
        <Image
          src="/hero.svg"
          alt="Artistify hero"
          width={600}
          height={400}
          priority
          className="px-10 md:px-0"
        />
      </section>
    </div>
  );
};

export default Hero;
