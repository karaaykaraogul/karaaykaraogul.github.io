import React from "react";
import { socialMediaLinks } from "./Info";

export default function SocialMedia(props) {
  return (
    <div className="flex justify-start items-center pt-5 pl-5 space-x-4">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:duration-300"
        >
          <img src="/icons/github_icon.png" width={40} height={40}></img>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:duration-300 "
        >
          <img src="/icons/linkedin.png" width={45} height={45}></img>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:duration-300"
        >
          <img src="/icons/mail.png" width={50} height={50}></img>
        </a>
      ) : null}

      {props.showAll ? RenderExpanded() : null}
    </div>
  );
}

function RenderExpanded() {
  return (
    <div className="flex space-x-4">
      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:duration-300"
        >
          <img src="/icons/instagram.png" width={45} height={45}></img>
        </a>
      ) : null}

      {socialMediaLinks.leetcode ? (
        <a
          href={socialMediaLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:duration-300"
        >
          <img src="/icons/leetcode.png" width={42} height={42}></img>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:duration-300"
        >
          <img src="/icons/twitter.png" width={45} height={45}></img>
        </a>
      ) : null}
    </div>
  );
}
