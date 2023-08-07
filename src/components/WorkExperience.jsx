import React, { useState } from "react";
import { workExperiences } from "./Info";
import WorkExperienceBulletPoints from "./WorkExperienceBulletPoints";

export default function WorkExperience() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div>
        <p className="pl-2 pb-2 text-3xl font-semibold sm:text-6xl border-b-8 border-side-secondary">
          Work Experience
        </p>
      </div>
      <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 text-sm sm:text-2xl bg-main-secondary">
        {workExperiences.experience.map((item) => (
          <div className="border-x-2 border-side-primary px-2 py-5">
            <div className="border-hover bg-header-primary rounded-xl p-2 shadow-lg shadow-main-primary">
              <h1 className="text-xl sm:text-4xl font-bold">{item.company}</h1>
              <p className="text-lg sm:text-2xl font-semibold">{item.role}</p>
              <p className="text-lg sm:text-xl font-semibold">{item.date}</p>
            </div>
            <div className="py-4 pt-5 pl-2">
              {WorkExperienceBulletPoints(item)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
