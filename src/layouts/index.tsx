import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";

// @ts-ignore
import Background from "../assets/file.mp4";
import { Footer } from "../components/Footer";
import { Markdown } from "../components/Markdown";
import { Milestone } from "../components/Milestone";
import { Nav } from "../components/Nav";
import { Polaroid } from "../components/Polaroid";
import { Service } from "../components/Service";
import { Title } from "../components/Title";
import { LandingFrontmatter } from "../typings";

export const IndexLayout = (frontmatter: LandingFrontmatter) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  });

  return (
    <div id="top" className="flex flex-col items-center gap-8">
      <Helmet>
        <title>Digital Rocket</title>
      </Helmet>

      <Nav />

      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        loop
        className="fixed inset-0 object-cover w-full h-full opacity-25 -z-10"
      >
        <source src={Background} type="video/mp4" />
      </video>

      <section
        id="hero"
        className="relative flex flex-col items-center w-full max-w-3xl gap-8 p-4"
      >
        <h1 className="text-right font-[Aliseo] font-bold text-5xl">
          <ReactMarkdown className="with-accent">
            {frontmatter.about_caption}
          </ReactMarkdown>
        </h1>

        <div className="relative my-12 -z-10">
          <Polaroid className="!absolute hidden md:block top-12 -left-36 -rotate-12">
            <StaticImage
              className="w-48"
              src="../images/santiago.webp"
              alt=""
            />
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

        <div>
          <Title className="text-green-600">{frontmatter.about_title}</Title>
          <Markdown>{frontmatter.about_text}</Markdown>
        </div>
      </section>

      <section
        id="about"
        className="relative flex flex-col items-center w-full max-w-3xl p-4"
      >
        <div className="relative my-24 -z-10">
          <div className="-rotate-12">
            <Polaroid>
              <StaticImage
                className="w-[20rem] md:w-[28rem] lg:w-[36rem]"
                src="../images/planets_4.jpg"
                alt=""
              />
            </Polaroid>

            <h1 className="!absolute inset-0 text-center top-1/4 font-[Aliseo] font-bold text-3xl lg:text-5xl">
              <ReactMarkdown className="with-accent">
                {frontmatter.welcome_caption}
              </ReactMarkdown>
            </h1>
          </div>

          <div className="!absolute -left-24 -bottom-24">
            <div className="relative">
              <StaticImage
                className="w-96"
                src="../images/astronaut_1.png"
                alt=""
              />

              <StaticImage
                className="!absolute w-56 -left-24 -bottom-20"
                src="../images/thingy.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="welcome" className="relative">
        <div className="flex flex-col items-center w-full max-w-3xl p-4 mx-auto">
          <Title className="w-full text-left text-green-600">
            {frontmatter.welcome_title}
          </Title>
          <p>
            <Markdown>{frontmatter.welcome_text}</Markdown>
          </p>

          <h2 className="font-[Aliseo] text-purple-600 self-start font-bold text-2xl mb-24">
            IGNITION
          </h2>
        </div>
      </section>

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

        <Title id="crew" className="w-full text-left text-green-600">
          {frontmatter.crew_title}
        </Title>
        <p>
          <Markdown>{frontmatter.crew_text}</Markdown>
        </p>
      </section>

      <section className="relative flex flex-col items-center w-full max-w-3xl p-4">
        <div className="my-12">
          <Polaroid className="-mb-[12rem] ml-36 rotate-12">
            <StaticImage
              className="w-[20rem] lg:w-[36rem]"
              src="../images/moon.webp"
              alt=""
            />
          </Polaroid>

          <StaticImage src="../images/astronauts.png" alt="" />
        </div>

        <Title id="talents" className="w-full text-left text-green-600">
          Talents
        </Title>

        <div className="font-mono prose text-white marker:text-green-400 prose-invert lg:prose-xl">
          {frontmatter.talents_people.map(
            ({ person_name, person_position, person_description }) => (
              <>
                {person_name}
                <br />
                {person_position}
                <br />
                {person_description}
                <br />
                <br />
              </>
            )
          )}
        </div>
      </section>

      <section id="services" className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center w-full max-w-3xl p-4">
          <Title className="w-full text-left text-green-600">
            {frontmatter.services_title}
          </Title>
          <p className="font-bold">{frontmatter.services_text}</p>
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

      <section
        id="roadmap"
        className="flex flex-col items-center content-center w-full max-w-3xl p-4 margin-auto"
      >
        <Title className="w-full text-left text-green-600">Roadmap</Title>

        <div className="grid grid-cols-1 gap-8">
          {frontmatter.roadmap.map(
            ({ milestone_title, milestone_description, milestone_url }) => (
              <Milestone
                milestone_title={milestone_title}
                milestone_description={milestone_description}
              />
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};
