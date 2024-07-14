"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { SliderCard } from "./SliderCard";
import Image from "next/image";
import ClientOnlyBoundary from "../../../shared/utils/ClientOnlyBoundary";
import { useState } from "react";

export type TestimonialsGalleryProps = {
  sectionTitle: string;
  testimonials: {
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
  }[];
};

export function TestimonialsGallery({
  sectionTitle,
  testimonials,
}: TestimonialsGalleryProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="bg-white py-12 desktop:bg-baykar-washed-yellow desktop:py-20">
      <div className="desktop:flex desktop:items-center desktop:justify-between desktop:px-20">
        <h2 className="text-center text-[2rem] font-bold leading-none text-baykar-black desktop:text-left desktop:text-[3.5rem]">
          {sectionTitle}
        </h2>
        <div className="invisible hidden desktop:visible desktop:flex desktop:items-center desktop:gap-6">
          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            className="cursor-pointer appearance-none rounded-full border-2 border-baykar-brown p-3"
          >
            <Image src="/arrow-left.svg" alt="" width={24} height={24} />
          </button>
          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            className="cursor-pointer appearance-none rounded-full border-2 border-baykar-brown p-3"
          >
            <Image
              src="/arrow-left.svg"
              alt=""
              width={24}
              height={24}
              className="rotate-180"
            />
          </button>
        </div>
      </div>
      <div className="relative z-10 mt-8 desktop:mt-20">
        <ClientOnlyBoundary>
          <Swiper
            spaceBetween={16}
            slidesPerView={1.25}
            breakpoints={{
              768: {
                slidesPerView: 2.25,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 3000 }}
            onInit={(swiper) => {
              setSwiperInstance(swiper);
            }}
            className="h-auto pb-4"
            wrapperClass="h-auto!important "
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={crypto.randomUUID()}
                className="h-auto self-stretch"
              >
                <SliderCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ClientOnlyBoundary>
        <div className="absolute -top-4 left-0 h-full w-full bg-gradient-to-b from-baykar-yellow from-95% to-white to-95% desktop:-top-8 desktop:left-10 desktop:w-[calc(100%-5rem)]"></div>
      </div>
    </section>
  );
}
