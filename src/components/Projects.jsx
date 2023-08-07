import React from "react";
import { projects } from "./Info";

export default function Projects() {
  return (
    <div>
      <div>
        <p className="pl-2 pb-2 text-3xl font-semibold sm:text-6xl border-b-8 border-side-secondary">
          Projects
        </p>
      </div>
      <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 grid-flow-row-dense text-sm sm:text-2xl bg-main-secondary">
        {projects.repositories.map((item) => (
          <div className="grid grid-flow-col-dense border-x-2 border-side-primary px-2 py-5">
            <a href={item.link}>
              <div className="border-hover transition-all duration-200 bg-header-primary hover:bg-header-primary/10 rounded-xl p-2 shadow-lg shadow-black">
                <h1 className="text-xl sm:text-4xl font-bold">{item.name}</h1>
                <p className="text-lg sm:text-2xl font-semibold">
                  Click to go to link!
                </p>
                <p className="text-lg sm:text-xl font-semibold">
                  Tech Stack: {item.techstack}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
