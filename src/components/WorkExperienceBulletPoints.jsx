import React, { useState } from "react";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";

export default function WorkExperienceBulletPoints(experience) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <p>{experience.desc}</p>
      {!expanded && experience.descBullets ? <p>...</p> : null}
      <div
        className={`transition-all duration-200 origin-top    ${
          expanded ? "h-full scale-y-100" : "h-0 scale-y-0"
        }`}
      >
        {experience.descBullets?.map((item) => (
          <div>
            <br></br>
            <p>{item}</p>
          </div>
        ))}
      </div>
      {experience.descBullets && (
        <div className="justify-center items-center text-center p-4">
          <button
            className="shadow-lg shadow-black bg-opacity-50 border-4 rounded-lg p-2  border-width transition ease-in-out hover:scale-110 hover:-translate-y-1  hover:duration-150 hover:bg-opacity-100"
            onClick={() => setExpanded(!expanded)}
          >
            {!expanded ? (
              <div className="flex align-middle justify-center text-center">
                <ChevronDoubleDownIcon className="h-8 w-8" />
              </div>
            ) : (
              <div className="flex align-middle justify-center">
                <ChevronDoubleUpIcon className="h-8 w-8" />
              </div>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
