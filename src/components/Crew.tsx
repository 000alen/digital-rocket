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

        <div className="relative">
          <StaticImage src="../images/crew.png" alt="" />

          <StaticImage
            className="!absolute w-[10.1%] h-[11.7%] left-[17.6%] top-[69.5%]"
            src="../images/avatars/santiago.jpg"
            alt=""
          />

          <StaticImage
            className="!absolute w-[10.1%] h-[11.7%] left-[32.9%] top-[62.5%]"
            src="../images/avatars/ivo.jpg"
            alt=""
          />

          <StaticImage
            className="!absolute w-[10.1%] h-[11.7%] left-[48.2%] top-[69.5%]"
            src="../images/avatars/gonzalo.jpg"
            alt=""
          />

          <StaticImage
            className="!absolute w-[10.1%] h-[11.7%] left-[63%] top-[61.8%]"
            src="../images/avatars/claudio.jpg"
            alt=""
          />

          <StaticImage
            className="!absolute w-[10.1%] h-[11.7%] left-[78.9%] top-[71.1%]"
            src="../images/avatars/joaquin.jpg"
            alt=""
          />
        </div>
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
