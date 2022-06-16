import React from "react";
import { Helmet } from "react-helmet";

import { Background } from "../components/Background";
import { Contact } from "../components/Contact";
import { Crew } from "../components/Crew";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Nav";
import { Roadmap } from "../components/Roadmap";
import { Services } from "../components/Services";
import { Talents } from "../components/Talents";
import { Welcome } from "../components/Welcome";
import { LandingFrontmatter } from "../typings";

export const IndexLayout = (frontmatter: LandingFrontmatter) => {
  return (
    <div id="top" className="flex flex-col items-center gap-8">
      <Helmet>
        <title>Digital Rocket</title>
      </Helmet>

      <Background />

      <Nav {...frontmatter} />

      <Hero {...frontmatter} />

      <Welcome {...frontmatter} />

      <Crew {...frontmatter} />

      <Talents {...frontmatter} />

      <Services {...frontmatter} />

      <Roadmap {...frontmatter} />

      <Contact {...frontmatter} />

      <Footer {...frontmatter} />
    </div>
  );
};
