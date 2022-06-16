import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";

import { LandingFrontmatter } from "../typings";
import { Markdown } from "./Markdown";
import { Polaroid } from "./Polaroid";
import { Title } from "./Title";

export const Welcome = (frontmatter: LandingFrontmatter) => {
  const style = {
    "-webkit-mask-image": "linear-gradient(to top, black 0%, transparent 100%)",
    "mask-image": "linear-gradient(to top, black 0%, transparent 100%)",
  };

  return (
    <section
      id="welcome"
      className="relative flex flex-col items-center w-full max-w-3xl gap-8 p-4"
    >
      <div className="w-full">
        <Title className="w-full text-left text-green-600">
          {frontmatter.welcome_title}
        </Title>

        <Markdown className="!w-full">{frontmatter.welcome_text}</Markdown>

        <h2 className="font-[Aliseo] text-purple-600 self-start font-bold text-2xl">
          IGNITION
        </h2>
      </div>

      <div className="relative my-24 -z-10">
        <div className="-rotate-12">
          <Polaroid>
            <StaticImage
              className="w-[20rem] md:w-[28rem] lg:w-[36rem]"
              src="../images/planets_4.jpg"
              alt=""
            />
          </Polaroid>

          <ReactMarkdown className="with-accent !absolute p-4 inset-0 text-center flex justify-center items-center font-[Aliseo] font-bold text-lg md:text-3xl lg:text-5xl">
            {frontmatter.welcome_caption}
          </ReactMarkdown>
        </div>

        <div className="!absolute -left-24 -bottom-40 md:-left-36 md:-bottom-36 lg:-bottom-24">
          <div className="relative">
            <div className="relative">
              <StaticImage
                className="w-96"
                src="../images/astronaut_1.png"
                alt=""
              />

              <StaticImage
                // @ts-ignore
                style={style}
                className="!absolute origin-bottom inset-x-0 top-0 w-96 -scale-y-100"
                src="../images/astronaut_1.png"
                alt=""
              />
            </div>

            <StaticImage
              className="!absolute w-56 -left-24 -bottom-20"
              src="../images/thingy.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
