import React, { useState } from "react";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";

export default function WorkExperienceBulletPoints(experience) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {experience.descBullets?.map((item) =>
        expanded ? (
          <div>
            <p>
              <br />
              {item}
            </p>
          </div>
        ) : null
      )}
      {experience.descBullets && (
        <div className="justify-center items-center text-center p-4">
          <button
            className="border-4 rounded-lg p-2 w-40 bg-retro-dark-pink border-retro-dark-blue border-width transition ease-in-out hover:scale-110 hover:-translate-y-1  hover:duration-150"
            onClick={() => setExpanded(!expanded)}
          >
            {!expanded ? (
              <div className="flex align-middle justify-center text-center">
                <ChevronDoubleDownIcon className="h-10 w-10" />
                <p className="text-2xl">Expand</p>
                <ChevronDoubleDownIcon className="h-10 w-10" />
              </div>
            ) : (
              <div className="flex align-middle justify-center">
                <ChevronDoubleUpIcon className="h-10 w-10" />
                <p className="text-2xl">Collapse</p>
                <ChevronDoubleUpIcon className="h-10 w-10" />
              </div>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
