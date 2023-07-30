import React from "react";
import { socialMediaLinks } from "./Info";

export default function SocialMedia() {
  return (
    <div className="flex justify-center items-center py-5 space-x-5">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/github_icon.png" width={50} height={50}></img>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/linkedin.png" width={50} height={50}></img>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/mail.png" width={60} height={60}></img>
        </a>
      ) : null}
    </div>
  );
}
