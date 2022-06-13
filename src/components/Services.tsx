import React from "react";

import { LandingFrontmatter } from "../typings";
import { Markdown } from "./Markdown";
import { Service } from "./Service";
import { Title } from "./Title";

export const Services = (frontmatter: LandingFrontmatter) => {
  return (
    <section id="services" className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl p-4">
        <Title className="w-full text-left text-green-600">
          {frontmatter.services_title}
        </Title>
        <Markdown>{frontmatter.services_text}</Markdown>
      </div>

      <div className="grid w-full h-full grid-cols-1 md:grid-cols-3">
        {frontmatter.services.map(
          ({ service_name, service_description, service_markdown }) => (
            <Service
              service_name={service_name}
              service_description={service_description}
              service_markdown={service_markdown}
            />
          )
        )}
      </div>
    </section>
  );
};
