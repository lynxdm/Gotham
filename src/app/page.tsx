import { Footer } from '@/components/shared';
import { BiggestTechFestival, Celebration, Highlights, HomeBanner } from '@/components/home';

export default function Home() {
  return (
    <main className='home'>
      <HomeBanner />
      <BiggestTechFestival />
      <Highlights />
      <Celebration />
      <Footer />
    </main>
  );
}
