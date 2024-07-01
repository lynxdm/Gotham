import Image from 'next/image';

export const Highlights = () => {
  return (
    <section className='highlights-wrapper'>
      <div className='container'>
        <p className='text-lg' role='heading' aria-level={2}>
          Highlights
        </p>
        <h2 className='text-5xl'>Highlights From DevFest Lagos &apos;23</h2>
        <div className='highlights-img' role='img' aria-label="DevFest Lagos '23 Highlight Video">
          <div className='play-icon centered-flex' role='presentation'>
            <Image
              src='/images/svg/play-icon.svg'
              alt='Play Video Call to action'
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
