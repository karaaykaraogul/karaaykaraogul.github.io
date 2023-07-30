import React from "react";
import Greeting from "../components/Greeting";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";

export default function Main() {
  return (
    <div>
      <div className="grid grid-cols-12 justify-center items-center ">
        <div className="bg-slate-800 w-full h-full"></div>
        <div className="col-span-10 justify-center items-center text-white/100 box-border w-full h-wrap rounded-md border-4 border-indigo-500 pt-12">
          <div className="py-5">
            <Greeting />
          </div>
        </div>
        <div className="bg-slate-800 w-full h-full"></div>
      </div>
      <div className="grid grid-cols-12 justify-center items-center">
        <div className="bg-slate-800 w-full h-full"></div>
        <div className="col-span-10 justify-center items-center text-white/100 box-border w-full h-wrap rounded-md border-4 border-indigo-500">
          <div className="py-5">
            <Education />
          </div>
        </div>
        <div className="bg-slate-800 w-full h-full"></div>
      </div>
      <div className="grid grid-cols-12 justify-center items-center">
        <div className="bg-slate-800 w-full h-full"></div>
        <div className="col-span-10 justify-center items-center text-white/100 box-border w-full h-wrap rounded-md border-4 border-indigo-500">
          <div className="py-5">
            <WorkExperience />
          </div>
        </div>
        <div className="bg-slate-800 w-full h-full"></div>
      </div>
    </div>
  );
}
