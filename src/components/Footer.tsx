import React from "react";

import { LandingFrontmatter } from "../typings";
import { InstagramIcon } from "./icons/InstagramIcon";
import { Markdown } from "./Markdown";

export const Footer: React.FC<LandingFrontmatter> = (frontmatter) => {
  return (
    <footer className="flex flex-col items-center w-full gap-8 p-8 bg-black">
      <div className="flex flex-col justify-around w-full gap-8 lg:flex-row">
        <div className="w-full font-mono prose text-white marker:text-green-400 prose-invert">
          <h3>
            <strong>Digital Rocket</strong>
          </h3>
          <Markdown>{frontmatter.footer_text}</Markdown>
          <Markdown>{`Address: ${frontmatter.address}`}</Markdown>
        </div>

        <div className="w-full font-mono prose text-white marker:text-green-400 prose-invert">
          <h3>
            <strong>Contact</strong>
          </h3>
          <Markdown>{`Phone: ${frontmatter.phone}`}</Markdown>
          <Markdown>{`Email: ${frontmatter.email}`}</Markdown>
        </div>

        <div className="w-full font-mono prose text-white marker:text-green-400 prose-invert">
          <h3>
            <strong>Social Media</strong>
          </h3>
          <a className="flex items-center gap-2">
            <InstagramIcon />
            <span>@digital_rocket_studio</span>
          </a>
        </div>
      </div>

      <p className="font-mono prose w-full !text-center text-white marker:text-green-400 prose-invert">
        © DIGITAL ROCKET STUDIOS 2022 | Powered by POSTON DIGITAL ARTS
      </p>
    </footer>
  );
};
