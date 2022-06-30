import { OutboundLink } from "gatsby-plugin-google-gtag";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { Markdown } from "./Markdown";
import { Unrevealed } from "./Unrevealed";

interface Props {
  milestone_title: string;
  milestone_description: string;
  milestone_revealed: boolean;
  milestone_url?: string;
  milestone_image?: string;
}

export const Milestone: React.FC<Props> = ({
  milestone_title,
  milestone_description,
  milestone_revealed,
  milestone_url,
  milestone_image,
}) => {
  return (
    <div className="grid w-full grid-cols-2 place-items-center">
      <div className="flex flex-col items-end w-full">
        <h2 className="font-[Aliseo] text-purple-600 text-right font-bold text-2xl">
          {milestone_title}
        </h2>
        <Markdown>{milestone_description}</Markdown>
        {milestone_revealed && (
          <div className="font-mono prose text-white marker:text-green-400 prose-invert lg:prose-xl">
            <OutboundLink href={milestone_url} target="_blank" className="">
              Go!
            </OutboundLink>
          </div>
        )}
      </div>

      <div className="flex">
        {milestone_revealed ? (
          // <StaticImage className="w-28" src="../images/punk.jpg" alt="" />
          <img className="w-28" src={milestone_image} alt="" />
        ) : (
          <Unrevealed />
        )}
      </div>
    </div>
  );
};
