import Image from 'next/image';
import { ButtonType } from '../../../shared/types/global';
import { Button } from './Button';

export type HeroProps = {
  heroTitle: string;
  heroDescription: string;
  heroButtons: {
    buttonTitle: string;
    buttonIcon?: string;
    buttonUrl?: string;
    buttonAriaLabel: string;
    buttonType: ButtonType;
  }[];
  heroImageMobile: {
    src: string;
    alt: string;
  };
  heroImageDesktop: {
    src: string;
    alt: string;
  };
  heroBlockRows: {
    blockTitle: string;
    blockDescription: string;
    blockImage: {
      src: string;
      alt: string;
    };
  }[];
};

export function Hero({
  heroTitle,
  heroDescription,
  heroButtons,
  heroImageMobile,
  heroImageDesktop,
  heroBlockRows,
}: HeroProps) {
  return (
    <section className="bg-white py-12 px-4 font-roboto">
      <h2 className="font-bold text-[3.5rem] leading-[3.875rem] text-center">
        {heroTitle}
      </h2>
      <p className="text-lg text-center mt-8">{heroDescription}</p>
      <div className="flex gap-4 items-center px-2 mt-8">
        {heroButtons.map((button) => (
          <Button
            key={button.buttonTitle}
            buttonType={button.buttonType}
            buttonAriaLabel={button.buttonAriaLabel}
            buttonIcon={button.buttonIcon}
          >
            {button.buttonTitle}
          </Button>
        ))}
      </div>
      <div className="relative mt-8 mx-auto aspect-square object-cover">
        <Image
          src={heroImageMobile.src}
          alt={heroImageMobile.alt}
          fill
          className="z-10"
        />
        <div className="rounded-[3.125rem] bg-baykar-orange w-[272px] h-[276px] mx-auto translate-y-24"></div>
      </div>
    </section>
  );
}
