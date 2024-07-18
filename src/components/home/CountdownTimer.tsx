'use client';

import { gsap } from 'gsap';
import React, { useState, useEffect, useMemo, useRef } from 'react';

const isValidDateFormat = (dateString: string): boolean => {
  const regex = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/;
  return regex.test(dateString);
};

const parseDateString = (dateString: string): Date => {
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
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10),
    parseInt(hours, 10),
    parseInt(minutes, 10),
    parseInt(seconds, 10),
  );
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (eventDate: Date): TimeLeft => {
  const difference = +eventDate - +new Date();
  let timeLeft: TimeLeft = {
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
  const eventDate = useMemo(() => parseDateString(eventDateStr), [eventDateStr]);

  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(eventDate));

  const containerRef = useRef<HTMLDivElement>(null);
  const daysRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);
  const secondsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));

      if (eventDate.getTime() - new Date().getTime() <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          delay: 0.4,
          duration: 1,
          ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
          scrollTrigger: {
            trigger: containerRef.current,
          },
        },
      );
    }
  }, [isMounted]);

  useEffect(() => {
    if (secondsRef.current) {
      gsap.fromTo(
        secondsRef.current,
        { y: -30 },
        { y: 0, duration: 0.3, ease: 'cubic-bezier(0.7, 0, 0.25, 1)' },
      );
    }
  }, [timeLeft.seconds, isMounted]);

  useEffect(() => {
    if (minutesRef.current) {
      gsap.fromTo(
        minutesRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, delay: 0.6 },
      );
    }
  }, [timeLeft.minutes, isMounted]);

  useEffect(() => {
    if (hoursRef.current) {
      gsap.fromTo(
        hoursRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, delay: 0.8 },
      );
    }
  }, [timeLeft.hours, isMounted]);

  useEffect(() => {
    if (daysRef.current) {
      gsap.fromTo(
        daysRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, delay: 1 },
      );
    }
  }, [timeLeft.days, isMounted]);

  const { days, hours, minutes, seconds } = timeLeft;

  if (!isMounted) return <div className='timer-placeholder'></div>;

  return (
    <div className='countdown-wrapper' ref={containerRef}>
      <div>
        <h1 className='text-6xl' ref={daysRef}>
          {days}
        </h1>
        <p>Days</p>
      </div>
      <div>
        <h1 className='text-6xl' ref={hoursRef}>
          {hours}
        </h1>
        <p>Hours</p>
      </div>
      <div>
        <h1 className='text-6xl' ref={minutesRef}>
          {minutes}
        </h1>
        <p>Minutes</p>
      </div>
      <div>
        <h1 className='text-6xl' ref={secondsRef}>
          {seconds}
        </h1>
        <p>Seconds</p>
      </div>
    </div>
  );
};
