'use client';

import Image from 'next/image';
import { Button, Textfield, Modal } from '../shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState, useEffect, LegacyRef, useRef } from 'react';
import { subscriptionFormValidationSchema } from '@/utils/validationSchemas/subscriptionFormSchema';
import {
  subscriptionFormContainerAnimation,
  subscriptionHeadingTextAnimation,
  eventGalleryContainerAnimation,
} from '@/utils/animations/pages/homeAnimations';

interface subscriptionFormData {
  name: string;
  email: string;
}

export const Subscription = ({ subscriptionRef }: { subscriptionRef: LegacyRef<HTMLElement> }) => {
  const subsciptionFormRef = useRef<HTMLDivElement>(null);
  const textHeadingRef = useRef<HTMLDivElement>(null);
  const eventGgallerycontainerRef = useRef<HTMLDivElement>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  useEffect(() => {
    subscriptionFormContainerAnimation(subsciptionFormRef);
    subscriptionHeadingTextAnimation(textHeadingRef);
    eventGalleryContainerAnimation(eventGgallerycontainerRef);
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<subscriptionFormData>({
    mode: 'onBlur',
    //@ts-ignore
    resolver: yupResolver(subscriptionFormValidationSchema),
  });

  const onSubmit: SubmitHandler<subscriptionFormData> = ({ name, email }) => {
    console.log(name, email);
    setIsSuccessModalOpen(true);
    reset();
  };

  return (
    <>
      <section className='subscription-wrapper' ref={subscriptionRef}>
        <div className='container'>
          <div className='subscription-content'>
            <div className='subscription-form-container'>
              <p className='text-xl'>Join the community</p>
              <h2 className='text-5xl' ref={textHeadingRef}>
                Don&apos;t loose guard. Get notified first!
              </h2>
              <div ref={subsciptionFormRef}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Textfield
                    id='name'
                    placeholder='Your Name'
                    register={register}
                    error={errors.name?.message}
                  />

                  <Textfield
                    id='email'
                    type='email'
                    placeholder='Email Address'
                    register={register}
                    error={errors.email?.message}
                  />
                  <Button type='submit' label='Submit'></Button>
                </form>
              </div>
            </div>
            <div className='event-gallery-container' ref={eventGgallerycontainerRef}>
              <div className='event-img-four'>
                <Image
                  src='/images/webp/2023-event-img-four.webp'
                  width='280'
                  height='300'
                  alt='Event Image - Woman giving speech'
                />
              </div>
              <div className='event-img-three'>
                <Image
                  src='/images/webp/2023-event-img-three.webp'
                  width='280'
                  height='300'
                  alt='Event Image - Man addressing question'
                />
              </div>
              <div className='event-img-two'>
                <Image
                  src='/images/webp/2023-event-img-two.webp'
                  width='280'
                  height='300'
                  alt='Event Image - Man asking question'
                />
              </div>
              <div className='event-img-one'>
                <Image
                  src='/images/webp/2023-event-img-one.webp'
                  width='280'
                  height='300'
                  alt='Event Image - Group picture'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='arithmetic-container'></div>
      </section>
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false);
        }}
      >
        <div className='text-center success-modal'>
          <Image
            src='/images/icons/sms-icon.png'
            height={40}
            width={40}
            alt='You have a notification'
          />
          <h5 className='text-xl'>We will notify you!</h5>
          <p className='text-base'>
            You will be the first to know once ticket sales is live. Keep your eyes on your mailbox.
          </p>
          <Button label='Got it' onClick={() => setIsSuccessModalOpen(false)} />
        </div>
      </Modal>
    </>
  );
};
