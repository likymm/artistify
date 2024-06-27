import React from 'react';
import Card from './ui/Card';
import Image from 'next/image';

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
    label: "Work with Our Team Until You're Fully Satisfied.",
    imgSrc: '/collab.svg',
    imgAlt: "Work with Our Team Until You're Fully Satisfied.",
  },
];

const Service: React.FC = () => {
  return (
    <div id="how-it-works" className="bg-primary">
      <div className="container mx-auto flex min-h-screen items-center justify-center">
        <section className="flex flex-col items-center py-10">
          <h2 className="mb-28 max-w-4xl text-center text-5xl font-bold text-white">
            Unlock Your Aspirations with Our Dedicated Team by Your Side
          </h2>

          <div className="grid-col-3 flex gap-5">
            {items.map((item, index) => (
              <Card key={index}>
                <h3 className="mb-16 text-xl font-bold">{item.label}</h3>
                <Image src={item.imgSrc} alt={item.imgAlt} width={300} height={200} />
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
