'use client';

import { useState, useEffect } from 'react';

const isValidDateFormat = (dateString: string) => {
  const regex = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/;
  return regex.test(dateString);
};

const parseDateString = (dateString: string) => {
  if (!isValidDateFormat(dateString)) {
    console.error(
      'Invalid date format. Please use "DD/MM/YYYY HH:MM:SS". e.g: 29/10/2024 00:35:00',
    );

    dateString = '00/00/0000 00:00:00';
  }

  const [datePart, timePart] = dateString.split(' ');
  const [day, month, year] = datePart.split('/');
  const [hours, minutes, seconds] = timePart.split(':');

  return new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes),
    parseInt(seconds),
  );
};

const calculateTimeLeft = (eventDate: Date) => {
  const difference = +eventDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return timeLeft;
};

export const CountdownTimer = () => {
  const eventDateStr = process.env.NEXT_PUBLIC_EVENT_TIME || '';
  const eventDate = parseDateString(eventDateStr);

  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(eventDate);
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  if (!isMounted) return null;

  return (
    <div className='countdown-wrapper'>
      <div>
        <h1 className='text-6xl'>{days}</h1>
        <p>Days</p>
      </div>
      <div>
        <h1 className='text-6xl'>{hours}</h1>
        <p>Hours</p>
      </div>
      <div>
        <h1 className='text-6xl'>{minutes}</h1>
        <p>Minutes</p>
      </div>
      <div>
        <h1 className='text-6xl'>{seconds}</h1>
        <p>Seconds</p>
      </div>
    </div>
  );
};
