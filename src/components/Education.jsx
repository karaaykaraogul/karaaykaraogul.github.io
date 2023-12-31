import React from "react";
import { educationInfo } from "./Info";

export default function Education() {
  return (
    <div>
      <div>
        <p className="pl-2 pb-2 text-3xl font-semibold sm:text-6xl border-b-8 border-side-secondary">
          Education
        </p>
      </div>
      <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 grid-flow-row-dense text-sm sm:text-2xl bg-main-secondary">
        {educationInfo.schools.map((item) => (
          <div className="grid grid-rows-2 grid-flow-col-dense border-x-2 border-side-primary px-2 py-5">
            <div className="border-hover bg-header-primary rounded-xl p-2 shadow-lg shadow-main-primary">
              <h1 className="text-xl sm:text-4xl font-bold">
                {item.schoolName}
              </h1>
              <p className="text-lg sm:text-2xl font-semibold">
                {item.subHeader}
              </p>
              <p className="text-lg sm:text-xl font-semibold">
                {item.duration}
              </p>
            </div>
            <div className="pt-5 pl-2">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
