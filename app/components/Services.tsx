import React from 'react';
import Image from 'next/image';
import { NavId } from './ui/Navigation';
import { Card } from '@/components/ui/card';

const serviceItems: { imgUrl: string; description: string }[] = [
  {
    imgUrl: '/management-system.png',
    description: 'Customized management system',
  },
  {
    imgUrl: '/data.png',
    description: 'Structured data architecture',
  },
  {
    imgUrl: '/uiux.png',
    description: 'Tailed design solution by UI/UX designer',
  },
  {
    imgUrl: '/support.png',
    description: 'Complete development support',
  },
  {
    imgUrl: '/hosting.png',
    description: 'Web hosting',
  },
  {
    imgUrl: '/security.png',
    description: 'Heightened security measures',
  },
  {
    imgUrl: '/qa.png',
    description: 'Designated business analyst & quality assurance',
  },
  {
    imgUrl: '/manager.png',
    description: 'Exclusive project manager',
  },
];

const Services: React.FC = () => {
  return (
    <div id={NavId.services}>
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-32">
        <div>
          <div className="text-center">
            <p className="mb-3 font-bold uppercase">How it Works</p>
            <h2 className="mb-5 font-bold !leading-snug md:mb-20 md:text-5xl">
              From Concept to Practical Solution
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {serviceItems.map((service) => (
              <Card key={service.description} className="flex flex-col items-center p-5 shadow-lg">
                <Image
                  src={service.imgUrl}
                  alt={service.description}
                  width={80}
                  height={80}
                  className="mb-5"
                />
                <p className="text-center">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
