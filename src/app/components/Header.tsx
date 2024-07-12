'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type HeaderProps = {
  brandName: string;
  headerLinks: {
    linkTitle: string;
    linkUrl: string;
    isButton?: boolean;
  }[];
};

export function Header({ brandName, headerLinks }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="overflow-hidden bg-white desktop:bg-baykar-washed-yellow">
      <section className="container p-4 desktop:flex desktop:items-center desktop:justify-between desktop:px-20 desktop:py-8">
        <div className="text-baykar-brown font-roboto flex justify-between items-center">
          <h1 className="text-[2rem] leading-9 font-bold">{brandName}</h1>
          <button
            type="button"
            className="appearance-none outline-offset-4 desktop:hidden desktop:invisible"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src="/header-mobile-icon.svg"
              alt="Mobile menu icon"
              width={24}
              height={24}
              className="cursor-pointer text-baykar-brown"
              unoptimized
            />
          </button>
        </div>
        {/* Mobile menu */}
        <nav
          className={`${
            isMenuOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0'
          } transition-all duration-300 flex flex-col bg-white h-screen fixed top-0 right-0 w-full gap-4 items-center py-12`}
        >
          <button
            type="button"
            className="appearance-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="bg-baykar-black w-[0.125rem] rotate-45 block h-7 absolute right-12 top-8" />
            <span className="bg-baykar-black w-[0.125rem] -rotate-45 block h-7 absolute right-12 top-8" />
          </button>
          {headerLinks.map((link) => (
            <Link
              key={link.linkTitle}
              href={link.linkUrl}
              className={
                link.isButton
                  ? 'px-4 py-2 rounded-md font-medium text-baykar-yellow bg-transparent border-2 border-baykar-brown text-xl'
                  : 'py-1 font-medium text-baykar-yellow text-xl'
              }
            >
              {link.linkTitle}
            </Link>
          ))}
        </nav>
        {/* Desktop menu */}
        <nav className="hidden invisible desktop:flex desktop:visible desktop:items-center desktop:gap-8">
          {headerLinks.map((link) => (
            <Link
              key={link.linkTitle}
              href={link.linkUrl}
              className={
                link.isButton
                  ? 'px-7 py-3 rounded-md font-medium text-baykar-yellow bg-transparent border-2 border-baykar-brown leading-6'
                  : 'font-medium text-baykar-yellow leading-6'
              }
            >
              {link.linkTitle}
            </Link>
          ))}
        </nav>
      </section>
    </header>
  );
}
