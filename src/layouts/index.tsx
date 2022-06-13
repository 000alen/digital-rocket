import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

// @ts-ignore
import Background from "../assets/file.mp4";
import { Footer } from "../components/Footer";
import { IdeaIcon } from "../components/icons/IdeaIcon";
import { Nav } from "../components/Nav";
import { Polaroid } from "../components/Polaroid";
import { Title } from "../components/Title";
import { Unrevealed } from "../components/Unrevealed";

interface Props {}

export const IndexLayout = ({}: Props) => {
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
        <Title className="text-right">
          Every mile of this <br />
          <span className="text-green-600">JOURNEY</span> will be a <br />
          Revolution.
        </Title>

        <div className="relative my-12 -z-10">
          <Polaroid className="absolute hidden md:block top-12 -left-36 -rotate-12">
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
            className="absolute bottom-0 -right-8"
            src="../images/rocket.png"
            alt=""
          />
        </div>

        <div>
          <Title className="text-green-600">
            NFT AND METAVERSE CONTENT DEVELOPER SPACE STATION
          </Title>

          <p className="font-bold">
            JOIN US AND BE PART OF THE DIGITAL ROCKET CREW LET'S BE THE FIRST TO
            STEP ON THE LAND OF THE NEW WORLD. EVERY MILE OF THIS JOURNEY WILL
            BE A REVOLUTION.
            <br />
            <br />
            HEY! DON'T MISS YOUR SEAT, WE'RE ABOUT TO DEPART …AND DON'T FORGET
            TO ENJOY THE RIDE. WHAT WOULD YOU LIKE TO DRINK?
          </p>
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

            <h1 className="absolute inset-0 text-center top-1/4 font-[Aliseo] font-bold text-3xl lg:text-5xl">
              TAKEOFF!, WE HAVE TAKEOFF! <br />
              <span className="text-green-600 ">DIGITAL ROCKET</span> IS ALREADY
              IN SPACE
            </h1>
          </div>

          <div className="absolute -left-24 -bottom-24">
            <div className="relative">
              <StaticImage
                className="w-96"
                src="../images/astronaut_1.png"
                alt=""
              />

              <StaticImage
                className="absolute w-56 -left-24 -bottom-20"
                src="../images/thingy.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="welcome" className="relative">
        <div className="flex flex-col items-center w-full max-w-3xl p-4 mx-auto">
          <Title className="w-full text-left text-green-600">Welcome</Title>
          <p>
            “THE CREW IS READY FOR THE MISSION 22 SECONDS REMAINING AND COUNTING
            FOR LAUNCH THE OBJECTIVE OF THE MISSION WILL BE TO CONQUER THE
            IMPOSSIBLE. THE TANKS ARE FULL OF ENERGY. ASTRONAUTS AT THEIR POSTS
            THE FIRING SEQUENCE BEGINS ALL ENGINES RUNNING”
          </p>

          <h2 className="font-[Aliseo] text-purple-600 self-start font-bold text-2xl mb-24">
            IGNITION
          </h2>
        </div>
      </section>

      <section className="relative flex flex-col items-center w-full max-w-3xl p-4">
        <div className="my-12">
          <Polaroid className="-mb-[12rem] rotate-12">
            <StaticImage
              className="w-[20rem] lg:w-[36rem]"
              src="../images/moon.webp"
              alt=""
            />
          </Polaroid>

          <StaticImage src="../images/crew.png" alt="" />
        </div>

        <Title id="crew" className="w-full text-left text-green-600">
          Crew
        </Title>
        <p>
          OUR CREW IS FROM ALL OF THE WORLD BASED IN SANTIAGO, CHILE. FROM OUR
          OPERATIONS CENTER IN POSTON DIGITAL ARTS, WITH MORE THAN 20 YEARS OF
          EXPERIENCE, WE HAVE BUILT A SOLID COMPANY IN THE AUDIOVISUAL WORLD,
          BOTH IN ADVERTISING AND CINEMA. <br />
          <br />
          WE HAVE LEADED PROJECTS FOR BIG BRANDS AND CUSTOMERS FROM ALL OVER THE
          WORLD AND WE ARE CURRENTLY READY FOR THE NEXT ADVENTURE. <br />
          <br />
          THIS NEW WORLD IS CONNECTED WITH THE INTERESTS THAT THE ENTIRE CREW
          HAS BEEN EXPLORING FOR YEARS. A SPACE WHERE THE BLOCKCHAIN IS OUR
          CENTRAL AXIS AND OUR MOTIVATION IS TO CREATE AND BE CARRIED AWAY. I.V
          THERE ARE PEOPLE WHO GET OUT OF THE BOX BEFORE OTHERS. I.V. HE DOES IT
          EVERY DAY AND FINDS NEW WAYS TO HACK THIS MATRIX.
        </p>
      </section>

      <section className="relative flex flex-col items-center w-full max-w-3xl p-4">
        <div className="my-12">
          <Polaroid className="-mb-[12rem] rotate-12">
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
        <p>
          SANTIAGO AGUILERA <br />
          ART DIRECTOR <br />
          DIRECTED MORE THAN 10,000 AUDIOVISUAL AND IMMERSIVE TECHNOLOGY
          PROJECTS SUCCESSFULLY DELIVERED. VARIOUS AWARDS IN NUMEROUS FESTIVALS.{" "}
          <br />
          <br />
          IVO VODANOVIC <br />
          EXECUTIVE DIRECTOR
          <br />
          WITH MORE THAN TEN YEARS OF EXPERIENCE IN AUDIOVISUAL PRODUCTION, TEN
          IN RETAIL AND THE LAST THREE DEDICATED TO THE BLOCKCHAIN WORLD, ENTERS
          THIS WEB 3.0 CHALLENGE FROM THE CHILEAN PATAGONIA.
          <br />
          <br />
          GONZALO POMÉS
          <br />
          EXECUTIVE PRODUCER
          <br />
          15 YEARS OF EXPERIENCE IN EXECUTIVE PRODUCTION FOR AUDIOVISUAL FILM
          AND IMMERSIVE ADVERTISING TECHNOLOGY PROJECTS.
          <br />
          <br />
          CLAUDIO VILLARROEL
          <br />
          CHIEF FINANCIAL OFFICER
          <br />
          MANAGER IN BANKING CORPORATIONS, SELF-TAUGHT TRADER OF THE FIAT AND
          CRYPTO CURRENCIES. <br />
          <br />
          JOAQUIN MATAMALA
          <br />
          CREATIVE DIRECTOR
          <br />
          DURING THE LAST 15 YEARS HAS CREATED MULTIPLE DIGITAL & AUDIOVISUAL
          CONTENT. DURING HIS CAREER, HE HAS DIRECTED DOCUMENTARIES, SHORT
          FILMS, THREE TELEVISION SERIES AND IS CURRENTLY PRODUCING HIS FIRST
          FEATURE FILM
        </p>
      </section>

      <section id="services" className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center w-full max-w-3xl p-4">
          <Title className="w-full text-left text-green-600">Services</Title>
          <p className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eligendi
            accusantium nesciunt magni quod ex magnam iusto harum earum est
            accusamus excepturi natus soluta eaque officiis ipsa. Officiis,
            praesentium exercitationem?
          </p>
        </div>

        <div className="grid w-full h-full grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-around w-full h-full p-2 bg-black">
            <div className="flex flex-col items-center gap-2">
              <IdeaIcon className="w-24 h-24" />
              <p>STRATEGY</p>
            </div>
            <div>
              <p>
                LET'S START PLANNING THE STRATEGY TO MAKE YOUR IDEA KNOWN TO THE
                WORLD. LET'S DESIGN THE ROADMAP TO COVER EACH STAGE OF YOUR
                PROJECT-
              </p>
              <p>
                Defining a royalty strategy.
                <br />
                Building roadmaps covering every stage from design to launch.
                <br />
                Planning a community strategy.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-around w-full h-full p-2 bg-blue-600">
            <div className="flex flex-col items-center gap-2">
              <IdeaIcon className="w-24 h-24" />
              <p>STRATEGY</p>
            </div>
            <div>
              <p>
                LET'S START PLANNING THE STRATEGY TO MAKE YOUR IDEA KNOWN TO THE
                WORLD. LET'S DESIGN THE ROADMAP TO COVER EACH STAGE OF YOUR
                PROJECT-
              </p>
              <p>
                Defining a royalty strategy.
                <br />
                Building roadmaps covering every stage from design to launch.
                <br />
                Planning a community strategy.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-around w-full h-full p-2 bg-yellow-600">
            <div className="flex flex-col items-center gap-2">
              <IdeaIcon className="w-24 h-24" />
              <p>STRATEGY</p>
            </div>
            <div>
              <p>
                LET'S START PLANNING THE STRATEGY TO MAKE YOUR IDEA KNOWN TO THE
                WORLD. LET'S DESIGN THE ROADMAP TO COVER EACH STAGE OF YOUR
                PROJECT-
              </p>
              <p>
                Defining a royalty strategy.
                <br />
                Building roadmaps covering every stage from design to launch.
                <br />
                Planning a community strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="roadmap"
        className="flex flex-col items-center content-center w-full max-w-3xl p-4 margin-auto"
      >
        <Title className="w-full text-left text-green-600">Roadmap</Title>

        <div className="grid grid-cols-1 gap-8">
          <div className="grid w-full grid-cols-2 place-items-center">
            <div className="flex flex-col items-end">
              <h2 className="font-[Aliseo] text-purple-600 font-bold text-2xl">
                WITHOUT MASK SOCIETY
              </h2>
              <p className="font-bold">MINT DATE - JUNE 2022</p>
            </div>

            <div className="flex">
              <StaticImage className="w-28" src="../images/1.png" alt="" />
            </div>
          </div>

          <div className="grid w-full grid-cols-2 place-items-center">
            <div className="flex flex-col items-end">
              <h2 className="font-[Aliseo] text-purple-600 font-bold text-2xl">
                WITHOUT MASK SOCIETY
              </h2>
              <p className="font-bold">MINT DATE - JUNE 2022</p>
            </div>

            <div className="flex justify-end">
              <Unrevealed />
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center w-full gap-8 p-8 bg-gradient-to-r from-purple-900 to-purple-500">
        <Title>
          Got a Project?
          <br />
          We want to hear about it
        </Title>

        <div className="flex items-center justify-center w-32 h-32 text-center text-black rounded-full bg-cyan-300">
          Get a Free Estimate!
        </div>
      </section>

      <Footer />
    </div>
  );
};
