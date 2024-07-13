import Link from "next/link";
import { HTMLProps, ReactNode } from "react";
import { ButtonSize, ButtonType } from "../../../shared/types/global";
import Image from "next/image";

type ButtonProps = {
  children: ReactNode;
  buttonUrl?: string;
  buttonIcon?: string;
  buttonAriaLabel: string;
  buttonType: ButtonType;
  buttonSize: ButtonSize;
  classExtensions?: HTMLProps<HTMLElement>["className"];
};

const BUTTON_VARIANTS = {
  primary:
    "text-baykar-yellow bg-transparent border-2 border-baykar-brown rounded-lg",
  "primary-outline":
    "text-white bg-transparent border-2 border-white rounded-lg justify-center",
  secondary: "bg-transparent text-baykar-yellow",
};

const BUTTON_SIZES = {
  xs: "py-3 px-2 font-medium leading-6 w-full text-center",
  small: "py-3 px-7 font-medium leading-6 w-full text-center",
  medium: "px-8 py-4 font-medium text-xl w-full text-center",
  large: "px-12 py-5 font-bold leading-none text-2xl w-full text-center",
};

export function Button({
  children,
  buttonUrl,
  buttonIcon,
  buttonAriaLabel,
  buttonSize,
  buttonType,
  classExtensions,
}: ButtonProps) {
  return buttonUrl ? (
    <Link
      href={buttonUrl}
      aria-label={buttonAriaLabel}
      className="inline-block w-full"
    >
      <button
        type="button"
        className={`${BUTTON_VARIANTS[buttonType]} ${BUTTON_SIZES[buttonSize]} ${buttonIcon && "flex items-center gap-2"} ${classExtensions}`}
      >
        {buttonIcon ? (
          <Image src={buttonIcon} width={24} height={24} alt="" />
        ) : null}
        {children}
      </button>
    </Link>
  ) : (
    <button
      type="button"
      aria-label={buttonAriaLabel}
      className={`${BUTTON_VARIANTS[buttonType]} ${BUTTON_SIZES[buttonSize]} ${
        buttonIcon && "flex items-center gap-2"
      } ${classExtensions}`}
    >
      {buttonIcon ? (
        <Image src={buttonIcon} width={24} height={24} alt="" />
      ) : null}
      {children}
    </button>
  );
}
