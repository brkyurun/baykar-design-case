import Link from "next/link";
import { ReactNode } from "react";
import { ButtonSize, ButtonType } from "../../../shared/types/global";
import Image from "next/image";

type ButtonProps = {
  children: ReactNode;
  buttonUrl?: string;
  buttonIcon?: string;
  buttonAriaLabel: string;
  buttonType: ButtonType;
  buttonSize: ButtonSize;
};

const BUTTON_VARIANTS = {
  primary:
    "text-baykar-yellow bg-transparent border-2 border-baykar-brown rounded-lg",
  secondary: "bg-transparent text-baykar-yellow",
};

const BUTTON_SIZES = {
  xs: "py-3 px-2 font-medium leading-6 w-full",
  small: "py-3 px-7 font-medium leading-6 w-full",
  medium: "px-8 py-4 font-medium text-xl w-full",
};

export function Button({
  children,
  buttonUrl,
  buttonIcon,
  buttonAriaLabel,
  buttonSize,
  buttonType,
}: ButtonProps) {
  return buttonUrl ? (
    <Link
      href={buttonUrl}
      aria-label={buttonAriaLabel}
      className={`${BUTTON_VARIANTS[buttonType]} ${BUTTON_SIZES[buttonSize]}`}
    >
      <button type="button" className="">
        {children}
      </button>
    </Link>
  ) : (
    <button
      type="button"
      aria-label={buttonAriaLabel}
      className={`${BUTTON_VARIANTS[buttonType]} ${BUTTON_SIZES[buttonSize]} ${
        buttonIcon && "flex items-center gap-2"
      }`}
    >
      {buttonIcon ? (
        <Image src={buttonIcon} width={24} height={24} alt="" />
      ) : null}
      {children}
    </button>
  );
}
