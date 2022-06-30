import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";

import { LandingFrontmatter } from "../typings";
import { InstagramIcon } from "./icons/InstagramIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Markdown } from "./Markdown";

export const Footer: React.FC<LandingFrontmatter> = (frontmatter) => {
  return (
    <footer className="flex flex-col items-center w-full gap-8 p-8 bg-black">
      <div className="flex flex-col justify-around w-full gap-8 lg:flex-row">
        <div className="w-full font-mono prose text-white marker:text-green-400 prose-invert">
          <h3>
            <strong>{frontmatter.footer_title}</strong>
          </h3>
          <Markdown>{frontmatter.footer_text}</Markdown>
          <Markdown>{`Address: ${frontmatter.address}`}</Markdown>
        </div>

        <div className="w-full font-mono prose text-white marker:text-green-400 prose-invert">
          <h3>
            <strong>{frontmatter.footer_contact}</strong>
          </h3>
          <Markdown>{`Phone: ${frontmatter.phone}`}</Markdown>

          <div className="font-mono prose text-white marker:text-green-400 prose-invert lg:prose-xl">
            Email:{" "}
            <OutboundLink
              href={`mailto:${frontmatter.email}`}
              target="_blank"
              className=""
            >
              {frontmatter.email}
            </OutboundLink>
          </div>
        </div>

        <div className="w-full font-mono prose text-white marker:text-green-400 prose-invert">
          <h3>
            <strong>{frontmatter.footer_social}</strong>
          </h3>
          <OutboundLink
            href={frontmatter.instagram_url}
            target="_blank"
            className="flex items-center gap-2"
          >
            <InstagramIcon className="w-6 h-6 fill-[#e41388]" />
            <span>{frontmatter.instagram_handle}</span>
          </OutboundLink>
          <OutboundLink
            href={frontmatter.twitter_url}
            target="_blank"
            className="flex items-center gap-2"
          >
            <TwitterIcon className="w-6 h-6 fill-[#e41388]" />
            <span>{frontmatter.twitter_handle}</span>
          </OutboundLink>
        </div>
      </div>

      <p className="font-mono prose w-full !text-center text-white marker:text-green-400 prose-invert">
        {frontmatter.footer_copyright}
      </p>
    </footer>
  );
};
