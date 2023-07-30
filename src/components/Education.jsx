import React from "react";
import { educationInfo } from "./Info";

export default function Education() {
  return (
    <div>
      <div className="pb-5">
        <p className="textl-lg sm:text-6xl border-b-8 border-rose-400">
          Education
        </p>
      </div>
      <div className="grid grid-cols-2 grid-flow-row-dense text-sm sm:text-2xl ">
        {educationInfo.schools.map((item) => (
          <div className="grid grid-rows-2 grid-flow-col-dense border-x-2 px-1">
            <div className="bg-red-500">
              <h1 className="text-xl sm:text-5xl font-bold">
                {item.schoolName}
              </h1>
              <p className="text-lg sm:text-3xl font-semibold">
                {item.subHeader}
              </p>
            </div>
            <div className="bg-slate-500">
              <p>{item.duration}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
