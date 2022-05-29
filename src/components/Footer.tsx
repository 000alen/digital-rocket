import React from "react";

import { DRLogo } from "./DRLogo";
import { FancyButton } from "./FancyButton";
import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Mailing } from "./Mailing";
import { WMSLogo } from "./WMSLogo";

interface Props {}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="flex justify-around bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
      <div className="flex justify-center w-full gap-2">
        <a href="" target="_blank">
          <TwitterIcon />
        </a>
        <a href="" target="_blank">
          <InstagramIcon />
        </a>
        <a href="" target="_blank">
          <DiscordIcon />
        </a>
        <a href="" target="_blank">
          <OpenseaIcon />
        </a>
      </div>

      <DRLogo className="w-36 h-36" />
    </footer>
  );
};
