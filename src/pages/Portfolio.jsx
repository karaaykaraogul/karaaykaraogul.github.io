import React from "react";
import Projects from "../components/Projects";

export default function Portfolio() {
  return (
    <div>
      <div className="grid grid-cols-12 justify-center items-center ">
        <div className=" w-full h-full"></div>
        <div className="col-span-10 justify-center items-center box-border w-full h-wrap rounded-md border-4 border-side-secondary pt-12">
          <div>
            <Projects />
          </div>
          <div className="flex gap-1 py-10 justify-items-center justify-center items-center text-center bg-main-secondary sm:text-2xl">
            <p className="">More can be found on my </p>
            <a
              className="underline underline-offset-8 text-blue-400 hover:text-blue-950"
              href="https://github.com/karaaykaraogul?tab=repositories"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
    </div>
  );
}
