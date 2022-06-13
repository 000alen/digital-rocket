import React from "react";

import { LandingFrontmatter } from "../typings";
import { Milestone } from "./Milestone";
import { Title } from "./Title";

export const Roadmap = (frontmatter: LandingFrontmatter) => {
  return (
    <section
      id="roadmap"
      className="flex flex-col items-center content-center w-full max-w-3xl p-4 margin-auto"
    >
      <Title className="w-full text-left text-green-600">Roadmap</Title>

      <div className="grid w-full grid-cols-1 gap-8">
        {frontmatter.roadmap.map(
          ({ milestone_title, milestone_description, milestone_revealed, milestone_url, milestone_image }, i) => (
            <Milestone
              key={i}
              milestone_title={milestone_title}
              milestone_description={milestone_description}
              milestone_revealed={milestone_revealed}
              milestone_url={milestone_url}
              milestone_image={milestone_image}
            />
          )
        )}
      </div>
    </section>
  );
};
