import Link from 'next/link';
import { ReactNode } from 'react';
import { ButtonType } from '../../../shared/types/global';
import Image from 'next/image';

type ButtonProps = {
  children: ReactNode;
  buttonUrl?: string;
  buttonIcon?: string;
  buttonAriaLabel: string;
  buttonType: ButtonType;
};

const BUTTON_VARIANTS = {
  primary:
    'px-8 py-4 rounded-lg font-medium text-baykar-yellow bg-transparent border-2 border-baykar-brown text-xl w-full',
  secondary:
    'px-2 py-3 bg-transparent text-baykar-yellow font-medium leading-6 w-full',
};

export function Button({
  children,
  buttonUrl,
  buttonIcon,
  buttonAriaLabel,
  buttonType,
}: ButtonProps) {
  return buttonUrl ? (
    <Link
      href={buttonUrl}
      aria-label={buttonAriaLabel}
      className={BUTTON_VARIANTS[buttonType]}
    >
      <button type="button" className="">
        {children}
      </button>
    </Link>
  ) : (
    <button
      type="button"
      aria-label={buttonAriaLabel}
      className={`${BUTTON_VARIANTS[buttonType]} ${
        buttonIcon && 'flex items-center gap-2'
      }`}
    >
      {buttonIcon ? (
        <Image src={buttonIcon} width={24} height={24} alt="" />
      ) : null}
      {children}
    </button>
  );
}
