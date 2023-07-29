import { useState } from "react";

export default function RotateButton() {
  const [fade, setRotate] = useState(false);

  const triggerRotate = () => {
    setRotate((prevState) => {
      return !prevState;
    });
  };

  return (
    <div
      onAnimationEnd={triggerRotate}
      className={
        fade
          ? "transition ease-in-out wiggle 1s rotate-[720deg] text-4xl duration-1000"
          : "transition ease-in-out rotate-[0deg] text-4xl duration-1000"
      }
    >
      <button onClick={triggerRotate}>🌚</button>
    </div>
  );
}
