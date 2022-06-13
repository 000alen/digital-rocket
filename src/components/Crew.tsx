import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { LandingFrontmatter } from "../typings";
import { Markdown } from "./Markdown";
import { Polaroid } from "./Polaroid";
import { Title } from "./Title";

export const Crew = (frontmatter: LandingFrontmatter) => {
  return (
    <section className="relative flex flex-col items-center w-full max-w-3xl p-4">
      <div className="my-12">
        <Polaroid className="-mb-[12rem] ml-36 rotate-12">
          <StaticImage
            className="w-[20rem] lg:w-[36rem]"
            src="../images/moon.webp"
            alt=""
          />
        </Polaroid>

        <StaticImage src="../images/crew.png" alt="" />
      </div>

      <div className="w-full">
        <Title id="crew" className="w-full text-left text-green-600">
          {frontmatter.crew_title}
        </Title>
        <Markdown>{frontmatter.crew_text}</Markdown>
      </div>
    </section>
  );
};
