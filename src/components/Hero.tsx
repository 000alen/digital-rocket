import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";

import { LandingFrontmatter } from "../typings";
import { Markdown } from "./Markdown";
import { Polaroid } from "./Polaroid";
import { Title } from "./Title";

export const Hero = (frontmatter: LandingFrontmatter) => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center w-full max-w-3xl gap-8 p-4"
    >
      <ReactMarkdown className="with-accent text-right font-[Aliseo] font-bold text-5xl">
        {frontmatter.about_caption}
      </ReactMarkdown>

      <div className="relative my-12 -z-10">
        <Polaroid className="!absolute hidden md:block top-12 -left-36 -rotate-12">
          <StaticImage className="w-48" src="../images/santiago.webp" alt="" />
        </Polaroid>

        <Polaroid className="rotate-12">
          <StaticImage
            className="w-[20rem] lg:w-[36rem]"
            src="../images/earth_1.jpg"
            alt=""
          />
        </Polaroid>

        <StaticImage
          className="!absolute bottom-0 -right-8"
          src="../images/rocket.png"
          alt=""
        />
      </div>

      <div className="w-full">
        <Title className="text-green-600">{frontmatter.about_title}</Title>
        <Markdown>{frontmatter.about_text}</Markdown>
      </div>
    </section>
  );
};
