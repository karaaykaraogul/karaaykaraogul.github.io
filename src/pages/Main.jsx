import React from "react";
import Greeting from "../components/Greeting";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";

export default function Main() {
  return (
    <div>
      <div className="grid grid-cols-12 justify-center items-center ">
        <div className="bg-retro-light-blue w-full h-full"></div>
        <div className="col-span-10 justify-center items-center text-white/100 box-border w-full h-wrap rounded-md border-4 border-retro-light-pink pt-12">
          <div className="py-5">
            <Greeting />
          </div>
        </div>
        <div className="bg-retro-light-blue w-full h-full"></div>
      </div>
      <div className="grid grid-cols-12 justify-center items-center">
        <div className="bg-retro-light-blue w-full h-full"></div>
        <div className="col-span-10 justify-center items-center text-white/100 box-border w-full h-wrap rounded-md border-4 border-retro-light-pink">
          <div className="pt-5">
            <Education />
          </div>
        </div>
        <div className="bg-retro-light-blue w-full h-full"></div>
      </div>
      <div className="grid grid-cols-12 justify-center items-center">
        <div className="bg-retro-light-blue w-full h-full"></div>
        <div className="col-span-10 justify-center items-center text-white/100 box-border w-full h-wrap rounded-md border-4 border-retro-light-pink">
          <div className="pt-5">
            <WorkExperience />
          </div>
        </div>
        <div className="bg-retro-light-blue w-full h-full"></div>
      </div>
      {/*TEMP PLACEHOLDER*/}
      <div className="grid grid-cols-12 justify-center items-center ">
        <div className="bg-retro-light-blue w-full h-screen"></div>
        <div className="col-span-10 "></div>
        <div className="bg-retro-light-blue w-full h-screen"></div>
      </div>
    </div>
  );
}
