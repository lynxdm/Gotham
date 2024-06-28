import Image from 'next/image';
import { Button } from '../shared';

export const HomeBanner = () => {
  return (
    <section className='home-banner'>
      <div className='container'>
        <div className='notify-block'>
          <Image src={'/images/svg/devfest-logo.svg'} alt='DevFest Lagos' height='36' width='111' />
          <Button label='Notify me' size='sm' />
        </div>
      </div>
    </section>
  );
};
