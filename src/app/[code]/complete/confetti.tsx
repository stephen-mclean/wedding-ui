"use client";

import Confetti from "react-confetti";

export const ThankYouCelebration = () => {
  return (
    <Confetti
      numberOfPieces={250}
      recycle={false}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};
