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
      className={`${className} text-xl italic font-bold lg:transition-all lg:hover:text-green-400`}
      href={href}
      onClick={() => onClick && onClick()}
      {...(target ? { target } : {})}
    >
      {children}
    </a>
  );
};

const NavIcon: React.FC<NavIconProps> = ({ href, IconComponent }) => {
  return (
    <a
      className="transition-all hover:text-green-400"
      href={href}
      target="_blank"
    >
      <IconComponent className="w-6 h-6 transition-all hover:fill-green-400" />
    </a>
  );
};

export const Nav: React.FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-row w-full gap-2 p-12">
        <div
          className={`${
            isOpen ? "opacity-100" : "opacity-0 invisible"
          } fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-2 transition-all bg-green-400 lg:!opacity-100 lg:!visible lg:bg-transparent lg:h-auto lg:w-full lg:justify-around lg:flex-row lg:static`}
        >
          <StaticImage className="w-32 h-32" src="../images/logo.png" alt="" />

          <NavLink
            className="lg:hidden"
            href="#top"
            onClick={() => setIsOpen(false)}
          >
            TOP
          </NavLink>
          <NavLink href="#welcome" onClick={() => setIsOpen(false)}>
            WELCOME
          </NavLink>
          <NavLink href="#crew" onClick={() => setIsOpen(false)}>
            CREW
          </NavLink>
          <NavLink href="#talents" onClick={() => setIsOpen(false)}>
            TALENTS
          </NavLink>
          <NavLink href="#services" onClick={() => setIsOpen(false)}>
            SERVICES
          </NavLink>

          <NavLink href="#roadmap" onClick={() => setIsOpen(false)}>
            ROADMAP
          </NavLink>
          {/* TODO: Use static query instead of hardcoding it */}
          <div className="flex flex-row items-center justify-center gap-2">
            <NavLink
              className="lg:text-green-400 !not-italic"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              EN
            </NavLink>
            <NavLink
              className="lg:text-green-400 !not-italic"
              href="/es/"
              onClick={() => setIsOpen(false)}
            >
              ES
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="fixed top-0 right-0 z-50 p-12 lg:hidden">
        <div
          className={`${isOpen ? "checked" : ""} w-6 h-6 hamburger`}
          onClick={() => setIsOpen((p) => !p)}
        >
          <div className="bar"></div>
        </div>
      </div>

      {/* <div className="fixed bottom-0 right-0 z-50 p-12">
        <a href="#" className="font-bold text-green-400">LET'S WORK!</a>
      </div> */}
    </>
  );
};
