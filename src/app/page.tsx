import { Hero, HeroProps } from './components/Hero';
import heroMock from '../../shared/mocks/hero.mock.json';

export default function Home() {
  return (
    <main className="">
      <Hero {...(heroMock as HeroProps)} />
    </main>
  );
}
