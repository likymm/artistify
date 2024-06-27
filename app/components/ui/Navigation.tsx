import Link from 'next/link';
import React from 'react';

interface NavProps {
  isIcons?: boolean;
}

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#work-with-us', label: 'Work with us' },
  { href: '#services', label: 'Services' },
  { href: '#get-in-touch', label: 'Get in touch' },
];

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId.replace('#', ''));
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Icon: React.FC = () => {
  return (
    <div className="h-5 w-5 rounded-full bg-black/10 transition hover:scale-125 hover:bg-black/50"></div>
  );
};

const Navigation: React.FC<NavProps> = ({ isIcons }) => {
  return (
    <nav className="space-x-16">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-400 transition hover:text-gray-800"
          onClick={(e) => handleScroll(e, link.href)}
        >
          {isIcons ? <Icon /> : link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
