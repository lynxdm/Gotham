'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Modal } from '../shared';

export const highlightsVideoUrl = 'https://www.youtube.com/embed/22PZkwJpu9k';

export const Highlights = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div className='video-iframe-wrapper'>
          <iframe
            src={`${highlightsVideoUrl}?autoplay=1&controls=0`}
            title='2023 DevFest Highlights Video'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            className='w-full video-frame'
          ></iframe>
        </div>
      </Modal>
    </section>
  );
};
