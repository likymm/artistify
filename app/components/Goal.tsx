import React from 'react';
import { NavId } from './ui/Navigation';

const Goal: React.FC = () => {
  return (
    <div id={NavId.goal}>
      <div className="mx-auto flex max-w-[1000px] items-center justify-center bg-[url(/goal.svg)] bg-center bg-no-repeat px-5 py-32 md:min-h-screen">
        <p className="mb-3 text-center text-2xl font-bold leading-snug md:text-6xl">
          <q>
            Our goal is to collaborate with businesses of every scale, guaranteeing access that will
            flourish in the digital realm.
          </q>
        </p>
      </div>
    </div>
  );
};

export default Goal;
