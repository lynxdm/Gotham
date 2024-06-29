import Image from 'next/image';
import { Button } from '../shared';
import { CountdownTimer } from './CountdownTimer';

export const HomeBanner = () => {
  return (
    <section className='home-banner'>
      <div className='container'>
        <div className='notify-block'>
          <Image src={'/images/svg/devfest-logo.svg'} alt='DevFest Lagos' height='36' width='111' />
          <Button label='Notify me' size='sm' />
        </div>
        <div className='hero-text-container'>
          <div className='hashtag-container'>
            <Image src='images/svg/hashtag.svg' height={40} width={40} alt='' />
          </div>
          <div className='asterik-container'>
            <Image src='images/svg/asterik.svg' height={40} width={40} alt='' />
          </div>
          <h2 className='text-5xl'>DevFest Lagos is Back, Bigger and Better</h2>
          <p className='text-xl'>
            We&apos;re back! and it&apos;s about to be the biggest and most unforgettable tech
            festival yet. Get ready for DevFest Lagos 2024.
          </p>
        </div>
        <div className='text-center'>
          <Button label='Get Early Bird Tickets' size='lg' />
        </div>
        {process.env.NEXT_PUBLIC_EVENT_TIME ? <CountdownTimer /> : ''}
      </div>
      <div className='arithmetic-container'>
        <Image
          src={'/images/svg/arithmetic.svg'}
          alt='DevFest Lagos'
          layout='responsive'
          width={700}
          height={475}
        />
      </div>
    </section>
  );
};
