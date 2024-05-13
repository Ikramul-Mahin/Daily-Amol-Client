import React, { useState, useEffect } from 'react';

const CountDown = () => {
	const targetDate = new Date('2024-12-31T23:59:59'); 
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
      //   Months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        Days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div targetDate={targetDate} className='text-5xl border border-6 text-center  my-20 mx-20'>
		
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}

		<h2 className='mt-2'>left To Start Our New Journey Of Monthly Amol.</h2>
		
    </div>
  );
};

export default CountDown;
