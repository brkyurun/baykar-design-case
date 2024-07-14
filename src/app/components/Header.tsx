"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { ButtonSize, ButtonType } from "../../../shared/types/global";

export type HeaderProps = {
  brandName: string;
  headerLinks: {
    linkTitle: string;
    linkUrl: string;
    isButton?: boolean;
    buttonProps?: {
      buttonType: ButtonType;
      buttonAriaLabel: string;
      buttonIcon?: string;
      buttonSize?: ButtonSize;
    };
  }[];
};

export function Header({ brandName, headerLinks }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const bodyRef = document.querySelector("body");
    if (isMenuOpen) {
      bodyRef?.classList.add("overflow-y-hidden");
    } else {
      bodyRef?.classList.remove("overflow-y-hidden");
    }
  }, [isMenuOpen]);

  return (
    <header className="relative isolate z-10 overflow-hidden bg-white desktop:bg-baykar-washed-yellow">
      <section className="container p-4 desktop:flex desktop:items-center desktop:justify-between desktop:px-20 desktop:py-8">
        <div className="flex items-center justify-between font-roboto text-baykar-brown">
          <h1 className="text-[2rem] font-bold leading-9">{brandName}</h1>
          <button
            type="button"
            className="appearance-none outline-offset-4 desktop:invisible desktop:hidden"
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
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } fixed right-0 top-0 z-50 flex h-screen w-full flex-col items-center gap-4 bg-white py-12 transition-all duration-300`}
        >
          <button
            type="button"
            className="appearance-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="absolute right-12 top-8 block h-7 w-[0.125rem] rotate-45 bg-baykar-black" />
            <span className="absolute right-12 top-8 block h-7 w-[0.125rem] -rotate-45 bg-baykar-black" />
          </button>
          {headerLinks.map((link) => (
            <Link
              key={link.linkTitle}
              href={link.linkUrl}
              className={
                link.isButton
                  ? "rounded-md border-2 border-baykar-brown bg-transparent px-8 py-4 text-xl font-medium text-baykar-yellow"
                  : "py-1 text-xl font-medium text-baykar-yellow"
              }
            >
              {link.linkTitle}
            </Link>
          ))}
        </nav>
        {/* Desktop menu */}
        <nav className="invisible hidden desktop:visible desktop:flex desktop:items-center desktop:gap-6">
          {headerLinks.map((link) =>
            link.isButton === true ? (
              <Link key={link.linkTitle} href={link.linkUrl}>
                <Button
                  buttonType={link.buttonProps?.buttonType || "primary"}
                  buttonAriaLabel={link.buttonProps?.buttonAriaLabel || ""}
                  buttonIcon={link.buttonProps?.buttonIcon}
                  buttonSize={link.buttonProps?.buttonSize || "small"}
                >
                  {link.linkTitle}
                </Button>
              </Link>
            ) : (
              <Link
                key={link.linkTitle}
                href={link.linkUrl}
                className="font-medium leading-6 text-baykar-yellow"
              >
                {link.linkTitle}
              </Link>
            ),
          )}
        </nav>
      </section>
    </header>
  );
}
