import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { Helmet } from "react-helmet";

import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

export const isBrowser = typeof window !== "undefined";

export default ({}: Props) => {
  return (
    <div className="h-screen scroll-smooth">
      <Helmet>
        <title>Digital Rocket</title>
      </Helmet>

      <Nav />

      <section>
        <StaticImage src="../images/rocket.png" alt="" />
        <StaticImage src="../images/earth_1.jpg" alt="" />
      </section>

      <section>
        <StaticImage src="../images/astronaut_1.png" alt="" />
        <StaticImage src="../images/planets_4.jpg" alt="" />
      </section>

      <section>
        <StaticImage src="../images/moon_1.jpg" alt="" />
        <StaticImage src="../images/crew.png" alt="" />
      </section>

      <section>
        <StaticImage src="../images/astronaut_1.png" alt="" />
        <StaticImage src="../images/planets_2.jpg" alt="" />
      </section>

      <Footer
        landing={true}
        twitter_url="twitter_url"
        instagram_url="instagram_url"
        discord_url="discord_url"
        opensea_url="opensea_url"
        digitalrocket_url="digitalrocket_url"
        mailing_text="mailing_text"
      />
    </div>
  );
};
