import React from "react";

import { DRLogo } from "./DRLogo";
import { InstagramIcon } from "./icons/InstagramIcon";

interface Props {}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="flex w-full p-8 bg-green-600 bg-opacity-50 border-t-2 border-green-400">
      <p>
        DIGITAL ROCKET STUDIOS
        <br />
        We work with brands to deliver NFT & Metaverse
        <br />
        projects. Address: Av. del Valle Nte. 961, Huechuraba, Región
        Metropolitana, Chile <br />
        Contact <br /> hello@digitalrocketstudios.io <br />
        +56(2) 2374 8550
      </p>

      <div className="flex flex-col justify-between w-full gap-2">
        <div className="flex items-start justify-between">
          <a className="flex items-center gap-2">
            <InstagramIcon />
            <span>@digital_rocket_studio</span>
          </a>
          <DRLogo className="w-24 h-24" />
        </div>

        <p className="text-right">© DIGITAL ROCKET STUDIOS 2022 | Powered by POSTON DIGITAL ARTS</p>
      </div>
    </footer>
  );
};
