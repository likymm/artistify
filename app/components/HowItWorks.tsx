import React from 'react';
import Image from 'next/image';
import { NavId } from './ui/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const items = [
  {
    label: 'Stunning Designs to Boost Your Business Success.',
    imgSrc: '/booking.svg',
    imgAlt: 'Stunning Designs to Boost Your Business Success.',
  },
  {
    label: 'Find and Present Solutions to Reach Your Goals.',
    imgSrc: '/solution.svg',
    imgAlt: 'Find and Present Solutions to Reach Your Goals.',
  },
  {
    label: 'Work with Our Team Until You`re Fully Satisfied.',
    imgSrc: '/collab.svg',
    imgAlt: 'Work with Our Team Until You`re Fully Satisfied.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div id={NavId.howItWorks} className="bg-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-32 xl:min-h-screen">
        <section className="flex flex-col items-center" aria-labelledby="service-heading">
          <h2
            id="service-heading"
            className="mb-5 max-w-4xl text-center text-2xl font-bold !leading-snug text-white md:mb-28 md:text-5xl"
          >
            Unlock Your Aspirations with Our Dedicated Team by Your Side
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <Card
                key={index}
                aria-labelledby={`card-heading-${index}`}
                className="max-w-sm px-5 py-8 md:px-10 md:py-20"
              >
                <CardContent>
                  <h3
                    id={`card-heading-${index}`}
                    className="mb-8 text-center font-bold md:mb-16 md:text-left md:text-xl"
                  >
                    {item.label}
                  </h3>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={300}
                    height={200}
                    className="mx-auto px-14 md:px-0"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
