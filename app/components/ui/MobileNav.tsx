import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';
import { GiHamburgerMenu } from 'react-icons/gi';

function MobileNav() {
  return (
    <Sheet>
      <div className="fixed top-0 flex w-full items-center bg-white p-2 shadow-xl">
        <SheetTrigger asChild>
          <Button variant="ghost" size={'sm'}>
            <GiHamburgerMenu />
          </Button>
        </SheetTrigger>
        <Link href="/">
          <Image src="/artistify.svg" alt="Artistify.js Logo" width={100} height={23} priority />
        </Link>
      </div>
      <SheetContent>
        <Link href="/" className="mb-10 inline-block">
          <Image src="/artistify.svg" alt="Artistify.js Logo" width={200} height={50} priority />
        </Link>
        <Navigation />
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
