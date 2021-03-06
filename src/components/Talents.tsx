import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { LandingFrontmatter } from "../typings";
import { Polaroid } from "./Polaroid";
import { Title } from "./Title";

export const Talents = (frontmatter: LandingFrontmatter) => {
  const style = {
    WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 25%)",
    maskImage: "linear-gradient(to top, black 0%, transparent 25%)",
  };

  return (
    <section className="relative flex flex-col items-center w-full max-w-3xl p-4">
      <div className="my-12">
        <Polaroid className="-mb-[12rem] ml-36 rotate-12">
          <StaticImage
            className="w-[20rem] lg:w-[36rem]"
            src="../images/moon_2b.jpg"
            alt=""
          />
        </Polaroid>

        <div className="relative">
          <StaticImage src="../images/astronauts.png" alt="" />
          <StaticImage
            style={style}
            className="!absolute -z-10 origin-bottom inset-x-0 top-0 -scale-y-100"
            src="../images/astronauts.png"
            alt=""
          />
        </div>
      </div>

      <div className="w-full">
        <Title id="talents" className="w-full text-left text-green-600">
          {frontmatter.talents_title}
        </Title>

        <div className="font-mono prose text-white marker:text-green-400 prose-invert lg:prose-xl">
          {frontmatter.talents_people.map(
            ({ person_name, person_position, person_description }, i) => (
              <div key={i}>
                <strong>{person_name}</strong> / <i>{person_position}</i>
                <br />
                {person_description}
                <br />
                <br />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
