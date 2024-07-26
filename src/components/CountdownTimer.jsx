import React, { useState, useEffect } from "react";

const CountdownTimer = ({ duration }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = duration - now.getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor(difference / (1000 * 60)),
        seconds: Math.floor((difference / 1000) % 60),
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

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
      {timeLeft.minutes !== undefined && timeLeft.seconds !== undefined ? (
        <span>
          {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </span>
      ) : (
        <span>You missed the Chance!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
