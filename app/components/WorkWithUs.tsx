import React from 'react';
import Image from 'next/image';
import { NavId } from './ui/Navigation';

const WorkWithUs: React.FC = () => {
  return (
    <div
      id={NavId.workWithUs}
      className="flex items-center justify-center bg-gray-50 px-5 py-32 xl:min-h-screen"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-2xl font-bold !leading-snug md:text-5xl">
          Let`s Artistify your Idea
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="order-2 md:order-none">
            <h3 className="mb-3 font-bold md:text-2xl">Streamlining Collaboration</h3>
            <p className="mb-10 text-gray-500">
              Not a fan of meetings? Us either. We prioritize flexibility, scheduling only when
              necessary, and at your convenience.
            </p>
            <h3 className="mb-3 font-bold md:text-2xl">Efficient Task Tracking</h3>
            <p className="mb-10 text-gray-500">
              We effortlessly manage your request board and track active, queued, and completed
              tasks.
            </p>
            <h3 className="mb-3 font-bold md:text-2xl">Quality-Driven Results</h3>
            <p className="text-gray-500">We drive projects forward with agile quality solutions.</p>
          </div>
          <div>
            <Image
              src="/idea.svg"
              alt="Let`s Artistify your Idea"
              width={600}
              height={400}
              priority
              className="mx-auto mb-5 px-20 md:px-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
