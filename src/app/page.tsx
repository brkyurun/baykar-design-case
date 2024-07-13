import { Hero, HeroProps } from "./components/Hero";
import {
  ProductGallery,
  ProductGalleryProps,
} from "./components/ProductGallery";
import heroMock from "../../shared/mocks/hero.mock.json";
import productGalleryMock from "../../shared/mocks/productGallery.mock.json";

export default function Home() {
  return (
    <main className="">
      <Hero {...(heroMock as HeroProps)} />
      <ProductGallery {...(productGalleryMock as ProductGalleryProps)} />
    </main>
  );
}
