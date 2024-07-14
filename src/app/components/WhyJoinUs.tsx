import Image from "next/image";
import { ButtonSize, ButtonType } from "../../../shared/types/global";
import { Button } from "./Button";

export type WhyJoinUsProps = {
  title: string;
  reasonsList: {
    reasonTitle: string;
  }[];
  buttonProps: {
    buttonTitle: string;
    buttonUrl: string;
    buttonAriaLabel: string;
    buttonType: ButtonType;
    buttonSize: ButtonSize;
  };
  image: {
    mobileImage: {
      imageSrc: string;
      imageAlt: string;
    };
    desktopImage: {
      imageSrc: string;
      imageAlt: string;
    };
  };
};

export function WhyJoinUs({
  title,
  reasonsList,
  buttonProps,
  image,
}: WhyJoinUsProps) {
  return (
    <section className="flex w-full flex-col items-center bg-white pb-14 pt-4 desktop:block desktop:bg-baykar-washed-yellow desktop:px-20 desktop:py-40">
      <div className="mx-4 flex max-w-[22.5rem] flex-col items-center justify-center gap-6 rounded-[1.875rem] bg-white py-8 text-baykar-black shadow-2xl shadow-black/20 desktop:mx-auto desktop:max-w-7xl desktop:flex-row desktop:justify-between desktop:px-20 desktop:py-[4.5rem]">
        <div className="flex flex-col items-center justify-center gap-6 desktop:items-start">
          <h2 className="px-4 text-center text-[2rem] font-bold leading-none desktop:px-0 desktop:text-left desktop:text-[3.5rem]">
            {title}
          </h2>
          <ul className="flex flex-col items-start gap-2 px-4 desktop:px-0">
            {reasonsList.map((reason) => (
              <li
                key={crypto.randomUUID()}
                className="flex items-start gap-2 before:block before:h-6 before:w-6 before:bg-[url('/checkmark.svg')] before:content-[''] desktop:text-xl desktop:leading-9"
              >
                {reason.reasonTitle}
              </li>
            ))}
          </ul>
          <Button
            buttonType={buttonProps.buttonType}
            buttonAriaLabel={buttonProps.buttonAriaLabel}
            buttonUrl={buttonProps.buttonUrl}
            buttonSize={buttonProps.buttonSize}
            classExtensions="max-w-[11.25rem] mx-auto relative z-10 desktop:mx-0"
          >
            {buttonProps.buttonTitle}
          </Button>
        </div>
        <div className="desktop:w-full desktop:max-w-[32.5rem]">
          <div className="relative mx-auto -mt-20 grid w-full place-items-center bg-transparent desktop:-mt-12">
            <Image
              src="/why-join-us-decoration.webp"
              alt=""
              width={392}
              height={386}
              className="max-h-[600px] w-full desktop:invisible desktop:hidden"
            />
            <Image
              src="/why-join-us-decoration-desktop.webp"
              alt=""
              width={520}
              height={620}
              className="invisible hidden w-full desktop:visible desktop:block"
            />
          </div>
          <div className="relative mx-4 -mt-[16.5rem] rounded-[1.25rem] bg-white shadow-2xl shadow-black/20 desktop:-mt-[25rem]">
            <div className="rounded-[1.25rem] bg-white">
              <Image
                src="/macos-tab-ui-icons.svg"
                alt=""
                width={392}
                height={10}
              />
            </div>
            <Image
              src={image.mobileImage.imageSrc}
              alt={image.mobileImage.imageAlt}
              width={361}
              height={220}
              className="-mt-4 h-full w-full rounded-b-[1.25rem] px-1 pb-1 desktop:invisible desktop:hidden"
            />
            <Image
              src={image.desktopImage.imageSrc}
              alt={image.desktopImage.imageAlt}
              width={520}
              height={310}
              className="invisible -mt-4 hidden h-full w-full rounded-b-[1.25rem] px-1 pb-1 desktop:visible desktop:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
