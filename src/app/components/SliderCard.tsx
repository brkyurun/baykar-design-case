import Image from "next/image";

export type SliderCardProps = {
  companyImage: {
    src: string;
    alt: string;
  };
  review: string;
  reviewAuthor: {
    name: string;
    title: string;
    image: {
      src: string;
      alt: string;
    };
  };
};

export function SliderCard({
  companyImage,
  review,
  reviewAuthor,
}: SliderCardProps) {
  return (
    <div className="border-baykar-light-blue flex flex-col items-start gap-6 rounded-[1.25rem] border bg-white p-6 shadow-lg shadow-black/20 desktop:gap-4 desktop:p-8">
      <Image
        src={companyImage.src}
        alt={companyImage.alt}
        width={124}
        height={32}
      />
      <p className="leading-6 text-black desktop:text-2xl desktop:leading-10">
        {review}
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={reviewAuthor.image.src}
          alt={reviewAuthor.image.alt}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-lg text-black">{reviewAuthor.name}</p>
          <p className="text-baykar-light-gray">{reviewAuthor.title}</p>
        </div>
      </div>
    </div>
  );
}
