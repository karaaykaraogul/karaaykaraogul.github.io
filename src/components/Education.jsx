import React from "react";
import { educationInfo } from "./Info";

export default function Education() {
  return (
    <div>
      <div className="">
        <p className="text-3xl font-semibold sm:text-6xl border-b-8 border-retro-light-pink">
          Education
        </p>
      </div>
      <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 grid-flow-row-dense text-sm sm:text-2xl bg-retro-light-blue">
        {educationInfo.schools.map((item) => (
          <div className="grid grid-rows-2 grid-flow-col-dense border-x-2 border-retro-dark-pink px-2 py-5">
            <div className="bg-retro-dark-pink rounded-xl p-2">
              <h1 className="text-xl sm:text-5xl font-bold">
                {item.schoolName}
              </h1>
              <p className="text-lg sm:text-3xl font-semibold">
                {item.subHeader}
              </p>
            </div>
            <div>
              <p>{item.duration}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
