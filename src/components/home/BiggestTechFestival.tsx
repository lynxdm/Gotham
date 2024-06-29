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
    <section className='big-tech-festival-wrapper'>
      <div className='container'>
        <div className='text-content'>
          <h2 className='text-5xl'>The Biggest Tech Festival in Nigeria</h2>
          <p className='text-xl'>
            We&apos;re back! and it&apos;s about to be the biggest and most unforgettable tech
            festival yet. Get ready for DevFest Lagos.
          </p>
        </div>
      </div>
      <div className='image-gallery'>
        <Marquee pauseOnHover pauseOnClick speed={20}>
          {eventImages.map((image, key) => (
            <div className='single-img-container' key={key}>
              <Image
                src={`/images/webp/${image}`}
                alt=''
                height={320}
                width={320}
                layout='responsive'
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
