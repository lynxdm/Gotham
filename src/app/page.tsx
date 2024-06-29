import { BiggestTechFestival, Celebration, Highlights, HomeBanner } from '@/components/home';

export default function Home() {
  return (
    <main className='home'>
      <HomeBanner />
      <BiggestTechFestival />
      <Highlights />
      <Celebration />
    </main>
  );
}
