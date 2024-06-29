import Image from 'next/image';

export const Highlights = () => {
  return (
    <section className='highlights-container'>
      <div className='container'>
        <p className='text-lg'>Highlights</p>
        <h2 className='text-5xl'>Highlights From DevFest Lagos &apos;23</h2>
        <div className='hightlights-img'>
          <div className='play-icon centered-flex'>
            <Image src='/images/svg/play-icon.svg' alt='' width={60} height={60} />
          </div>
        </div>
      </div>
    </section>
  );
};
