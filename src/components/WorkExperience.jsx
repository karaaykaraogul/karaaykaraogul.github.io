import React, { useState } from "react";
import { workExperiences } from "./Info";
import WorkExperienceBulletPoints from "./WorkExperienceBulletPoints";

export default function WorkExperience() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="">
        <p className="pb-2 text-3xl font-semibold sm:text-6xl border-b-8 border-retro-light-pink">
          Work Experience
        </p>
      </div>
      <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 text-sm sm:text-2xl bg-retro-light-blue">
        {workExperiences.experience.map((item) => (
          <div className="border-x-2 border-retro-dark-pink px-2 py-5">
            <div className="bg-retro-dark-pink rounded-xl p-2">
              <h1 className="text-xl sm:text-5xl font-bold">{item.company}</h1>
              <p className="text-lg sm:text-3xl font-semibold">{item.role}</p>
              <p className="text-lg sm:text-xl font-semibold">{item.date}</p>
            </div>
            <div className="py-4">
              <p>{item.desc}</p>
              {item.descBullets && WorkExperienceBulletPoints(item)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
