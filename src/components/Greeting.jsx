import React from "react";
import SocialMedia from "./SocialMedia";
import { greeting } from "./Info";

export default function Greeting() {
  return (
    <div className="grid row-span-3">
      <div className="text-left text-5xl sm:text-left sm:text-8xl py-10">
        <h1>{greeting.title}</h1>
      </div>
      <div className="textl-xl whitespace-pre-wrap sm:text-2xl justify-center items-center text-left">
        <p>{greeting.summary}</p>
      </div>
      <div className="">
        <SocialMedia />
      </div>
    </div>
  );
}
