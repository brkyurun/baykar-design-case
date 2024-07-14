import { ButtonSize, ButtonType } from "../../../shared/types/global";
import { Button } from "./Button";
import Image from "next/image";

export type ProductGalleryProps = {
  productGalleryTitle: string;
  productGalleryButtonProps: {
    buttonTitle: string;
    buttonUrl: string;
    buttonAriaLabel: string;
    buttonType: ButtonType;
    buttonSize: ButtonSize;
  };
  products: {
    productTitle: string;
    productDescription: string;
    productImage: {
      mobile: {
        src: string;
        alt: string;
      };
      desktop: {
        src: string;
        alt: string;
      };
    };
    productButtonProps: {
      buttonTitle: string;
      buttonUrl: string;
      buttonAriaLabel: string;
      buttonType: ButtonType;
      buttonSize: ButtonSize;
      buttonIcon?: string;
    };
  }[];
};

export function ProductGallery({
  productGalleryTitle,
  productGalleryButtonProps,
  products,
}: ProductGalleryProps) {
  return (
    <section className="bg-baykar-black bg-[url('/backlights.webp')] bg-contain bg-no-repeat px-4 py-12 text-white [background-position-y:34rem] desktop:p-20 desktop:[background-image:url('/backlights-desktop.webp')] desktop:[background-position-x:center] desktop:[background-position-y:12rem] desktop:[background-size:95%]">
      <div className="flex flex-col items-center gap-8 desktop:flex-row desktop:justify-between desktop:gap-20">
        <h2 className="inline-block text-center text-[2rem] font-bold desktop:text-[3.5rem]">
          {productGalleryTitle}
        </h2>
        <div className="mx-auto max-w-[14.625rem] desktop:mx-0">
          <Button
            buttonType={productGalleryButtonProps.buttonType}
            buttonAriaLabel={productGalleryButtonProps.buttonAriaLabel}
            buttonUrl={productGalleryButtonProps.buttonUrl}
            buttonSize={productGalleryButtonProps.buttonSize}
          >
            {productGalleryButtonProps.buttonTitle}
          </Button>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-8 desktop:mt-20 desktop:flex-row desktop:gap-12">
        {products.map((product) => (
          <div
            key={crypto.randomUUID()}
            className="overflow-hidden rounded bg-baykar-black shadow-xl shadow-[#E2E8F0]/25"
          >
            <Image
              src={product.productImage.mobile.src}
              alt={product.productImage.mobile.alt}
              width={361}
              height={220}
              className="h-full w-full rounded-t object-cover"
            />
            <div className="p-8">
              <h3 className="text-baykar-white text-2xl font-bold leading-none">
                {product.productTitle}
              </h3>
              <p className="text-baykar-white mt-4 text-lg leading-7">
                {product.productDescription}
              </p>
              <div className="mt-8">
                <Button
                  buttonType={product.productButtonProps.buttonType}
                  buttonAriaLabel={product.productButtonProps.buttonAriaLabel}
                  buttonUrl={product.productButtonProps.buttonUrl}
                  buttonSize={product.productButtonProps.buttonSize}
                  buttonIcon={product.productButtonProps.buttonIcon}
                  classExtensions="gap-4"
                >
                  {product.productButtonProps.buttonTitle}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
