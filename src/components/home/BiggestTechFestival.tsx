import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const eventImages = [
  'tech-festival-img-one.webp',
  'tech-festival-img-two.webp',
  'tech-festival-img-three.webp',
  'tech-festival-img-four.webp',
];

export const BiggestTechFestival = () => {
  return (
    <section className='big-tech-festival-wrapper' aria-labelledby='festival-heading'>
      <div className='container'>
        <div className='text-content'>
          <h2 id='festival-heading' className='text-5xl'>
            The Biggest Tech Festival in Nigeria
          </h2>
          <p className='text-xl'>
            We&apos;re back! and it&apos;s about to be the biggest and most unforgettable tech
            festival yet. Get ready for DevFest Lagos.
          </p>
        </div>
      </div>
      <div className='image-gallery' aria-label='Scrolling images of past events'>
        <Marquee speed={20} aria-label='Scrolling images of past events'>
          {eventImages.map((image, key) => (
            <div className='single-img-container' key={key}>
              <Image
                src={`/images/webp/${image}`}
                alt={'Festival Image'}
                height={300}
                width={320}
                style={{ width: '100%', height: '100%' }}
                // layout='responsive'
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
