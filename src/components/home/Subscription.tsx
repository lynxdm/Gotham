'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button, Textfield } from '../shared';

export const Subscription = () => {
  const [subscriptionFormData, setSubscriptionFormData] = useState({
    name: '',
    email: '',
  });

  const { email, name } = subscriptionFormData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubscriptionFormData({
      ...subscriptionFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', subscriptionFormData);
  };
  return (
    <section className='subscription-wrapper'>
      <div className='container'>
        <div className='subscription-content'>
          <div className='subscription-form-container'>
            <p className='text-xl'>Subscribe</p>
            <h2 className='text-5xl'>Don&apos;t loose guard. Get notified first!</h2>
            <form onSubmit={handleSubmit}>
              <Textfield
                id='name'
                placeholder='Your Name'
                value={name}
                handleChange={handleChange}
                required
              />

              <Textfield
                id='email'
                type='email'
                placeholder='Email Adress'
                value={email}
                handleChange={handleChange}
                required
              />
              <Button type='submit' label='Submit'></Button>
            </form>
          </div>
          <div></div>
        </div>
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
