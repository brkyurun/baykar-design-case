import Image from "next/image";
import { ButtonType } from "../../../shared/types/global";
import { Button } from "./Button";

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
    <section className="desktop:bg-gradient-hero-desktop bg-white bg-gradient-hero from-white from-45% to-baykar-light-yellow to-45% px-4 py-12 font-roboto desktop:from-baykar-washed-yellow desktop:from-[54%] desktop:to-baykar-light-yellow desktop:to-[54%] desktop:p-20">
      <div className="desktop:flex desktop:items-center desktop:justify-between desktop:gap-20">
        <div className="desktop:flex desktop:flex-col desktop:items-start desktop:gap-8">
          <h2 className="text-center text-[3.5rem] font-bold leading-[3.875rem] desktop:text-left desktop:text-7xl">
            {heroTitle}
          </h2>
          <p className="mt-8 text-center text-lg desktop:mt-0 desktop:max-w-[44.625rem] desktop:text-left">
            {heroDescription}
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-4 px-2 desktop:mx-0 desktop:mt-0 desktop:justify-start desktop:px-0">
            {heroButtons.map((button) => (
              <div
                className="desktop:max-w-[11.25rem]"
                key={button.buttonTitle}
              >
                <Button
                  buttonType={button.buttonType}
                  buttonAriaLabel={button.buttonAriaLabel}
                  buttonIcon={button.buttonIcon}
                >
                  {button.buttonTitle}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate mx-auto mt-8 desktop:mx-0 desktop:mt-0 desktop:h-[clamp(12.125rem,calc(12.125rem+((1vw-0.64rem)*46.6346)),24.25rem)] desktop:w-[clamp(15.25rem,calc(15.25rem+((1vw-0.64rem)*58.1731)),30.375rem)]">
          <Image
            src={heroImageMobile.src}
            alt={heroImageMobile.alt}
            sizes="100vw"
            width={362}
            height={314}
            className="absolute z-10 h-auto w-full object-cover desktop:invisible desktop:hidden"
          />
          <Image
            src={heroImageDesktop.src}
            alt={heroImageDesktop.alt}
            sizes="100vw"
            width={486}
            height={388}
            className="invisible absolute z-10 hidden h-auto w-full object-cover desktop:visible desktop:ml-auto desktop:block"
          />
          <div className="mx-auto h-[calc(100vw-7.5rem)] w-[calc(100vw-7.5rem)] translate-y-8 rounded-[3.125rem] bg-baykar-orange desktop:h-[clamp(11.625rem,calc(11.625rem+((1vw-0.64rem)*44.7115)),23.25rem)] desktop:max-h-[23.25rem] desktop:w-[clamp(11.5rem,calc(11.5rem+((1vw-0.64rem)*44.2308)),23rem)] desktop:max-w-[23rem] desktop:translate-y-11"></div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center gap-8 py-12 desktop:mt-40 desktop:flex-row desktop:gap-20 desktop:py-0">
        {heroBlockRows.map((block) => (
          <div
            key={crypto.randomUUID()}
            className="flex flex-col items-center gap-4 text-center desktop:items-start desktop:text-left"
          >
            <Image
              src={block.blockImage.src}
              alt={block.blockImage.alt}
              width={72}
              height={72}
              className="mx-auto aspect-square h-full max-h-16 w-full max-w-16 desktop:mx-0"
            />
            <h3 className="text-xl font-medium leading-5 text-baykar-black">
              {block.blockTitle}
            </h3>
            <p className="max-w-[55ch] text-lg leading-7 text-baykar-black">
              {block.blockDescription}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
