"use client";

import { SliderCard } from "./SliderCard";

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
  return (
    <section className="">
      {testimonials.map((testimonial) => (
        <SliderCard key={crypto.randomUUID()} {...testimonial} />
      ))}
    </section>
  );
}
