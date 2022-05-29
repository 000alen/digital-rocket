import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

interface Props {}

interface NavLinkProps {
  className?: string;
  href: string;
  target?: string;
  onClick?: () => void;
  children: string;
}

interface NavIconProps {
  href: string;
  IconComponent: React.FC<{ className?: string }>;
}

const NavLink: React.FC<NavLinkProps> = ({
  className,
  href,
  target,
  onClick,
  children,
}) => {
  return (
    <a
      className={`${className} text-xl italic font-bold`}
      href={href}
      onClick={() => onClick && onClick()}
      {...(target ? { target } : {})}
    >
      {children}
    </a>
  );
};

export const Nav: React.FC<Props> = ({}) => {
  return (
    <nav className="flex flex-row items-center justify-center h-24 gap-2 p-12 mt-24 bg-green-400">
      <StaticImage className="w-64 h-64" src="../images/logo.png" alt="" />
      <div className="flex flex-row items-center justify-center gap-2">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#shop" target="_blank">
          Welcome
        </NavLink>
        <NavLink href="#team">Crew</NavLink>
        <NavLink href="#roadmap">Roadmap</NavLink>
      </div>
    </nav>
  );
};
