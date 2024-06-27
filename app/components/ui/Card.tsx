import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <section className="shadow-3xl max-w-sm rounded-3xl border border-gray-200 bg-white px-10 py-20">
      {children}
    </section>
  );
};

export default Card;
