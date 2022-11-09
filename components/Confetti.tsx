import React from "react";
import Confetti from "react-confetti";

/**
 * Confetti component
 */
const ConfettiOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none fixed top-0 left-0 z-50 h-full w-full">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={300}
        recycle={false}
      />
    </div>
  );
};

export default ConfettiOverlay;
