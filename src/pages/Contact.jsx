import React from "react";
import SocialMedia from "../components/SocialMedia";

export default function Contact() {
  return (
    <div>
      <div className="grid grid-cols-12 justify-center items-center ">
        <div className=" w-full h-full"></div>
        <div className="col-span-10 justify-center items-center box-border w-full h-wrap rounded-md border-4 border-side-secondary pt-12 bg-main-secondary">
          <div className="grid gap-1 py-10 justify-items-center justify-center items-center text-center text-lg sm:font-semibold sm:text-2xl">
            <p className="">Social Media Links</p>
            <p className="sm:text-lg">
              (Please use my mail for any business inquiries)
            </p>
            <SocialMedia showAll={true} />
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
    </div>
  );
}
