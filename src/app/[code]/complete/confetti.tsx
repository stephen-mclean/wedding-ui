"use client";

import { useEffect } from "react";
import { useState } from "react";
import Confetti from "react-confetti";

export const ThankYouCelebration = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  return (
    <Confetti
      numberOfPieces={250}
      recycle={false}
      width={width}
      height={height}
    />
  );
};
