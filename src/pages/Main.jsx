import React from "react";
import Greeting from "../components/Greeting";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";

export default function Main() {
  return (
    <div className="space-y-20">
      <div className="grid grid-cols-12 justify-center items-center ">
        <div className="w-full h-full"></div>
        <div className="col-span-10 justify-center items-center box-border w-full h-wrap rounded-md border-4 border-side-secondary pt-12 bg-main-secondary">
          <div className="py-5">
            <Greeting />
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
      <div className="grid grid-cols-12 justify-center items-center">
        <div className="w-full h-full"></div>
        <div className="col-span-10 justify-center items-center box-border w-full h-wrap rounded-md">
          <div className="pt-5">
            <Education />
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
      <div className="grid grid-cols-12 justify-center items-center">
        <div className="w-full h-full"></div>
        <div className="col-span-10 justify-center items-center box-border w-full h-wrap rounded-md">
          <div className="pt-5">
            <WorkExperience />
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
    </div>
  );
}
