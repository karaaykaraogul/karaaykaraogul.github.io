import React from "react";
import SocialMedia from "./SocialMedia";
import { greeting } from "./Info";

export default function Greeting() {
  return (
    <div className="grid grid-flow-row-dense row-span-3 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 pl-5">
      <div className="order-last sm:order-first">{TitleCard()}</div>
      <div className="justify-self-center sm:px-8 sm:py-12">
        {StylizedImage()}
      </div>
    </div>
  );
}

function TitleCard() {
  return (
    <div className="sm:space-y-16">
      <div className="text-left text-5xl sm:text-left sm:text-8xl sm:py-10">
        <h1>{greeting.title}</h1>
      </div>
      <div className="text-justify textl-xl whitespace-pre-wrap sm:text-2xl justify-center items-center sm:text-left px-2 pr-6 sm:pr-0">
        <p>{greeting.summary}</p>
      </div>
      <div className="">
        <SocialMedia />
      </div>
    </div>
  );
}

function StylizedImage() {
  return (
    <div>
      <img
        className=" object-contain h-64 md:h-[32rem] border-hover rounded-2xl shadow-2xl shadow-main-primary"
        src="stylized_selfie.png"
      ></img>
    </div>
  );
}
