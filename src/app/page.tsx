import { Hero, HeroProps } from "./components/Hero";
import {
  ProductGallery,
  ProductGalleryProps,
} from "./components/ProductGallery";
import { WhyJoinUs, WhyJoinUsProps } from "./components/WhyJoinUs";
import heroMock from "../../shared/mocks/hero.mock.json";
import productGalleryMock from "../../shared/mocks/productGallery.mock.json";
import whyJoinUsMock from "../../shared/mocks/whyJoinUs.mock.json";
import {
  TestimonialsGallery,
  TestimonialsGalleryProps,
} from "./components/TestimonialsGallery";
import testimonialsGalleryMock from "../../shared/mocks/testimonialsGallery.mock.json";

export default function Home() {
  return (
    <main className="">
      <Hero {...(heroMock as HeroProps)} />
      <ProductGallery {...(productGalleryMock as ProductGalleryProps)} />
      <WhyJoinUs {...(whyJoinUsMock as WhyJoinUsProps)} />
      <TestimonialsGallery
        {...(testimonialsGalleryMock as TestimonialsGalleryProps)}
      />
    </main>
  );
}
