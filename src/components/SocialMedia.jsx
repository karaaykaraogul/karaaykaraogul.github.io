import React from "react";
import { socialMediaLinks } from "./Info";

export default function SocialMedia() {
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
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:duration-300"
        >
          <img src="/icons/linkedin.png" width={40} height={40}></img>
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
    </div>
  );
}
