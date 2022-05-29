import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Title } from "../components/Title";

interface Props {}

export default ({}: Props) => {
  return (
    <div className="scroll-smooth">
      <Helmet>
        <title>Digital Rocket</title>
      </Helmet>

      <Nav />

      <section>
        <div className="flex flex-col items-center w-full">
          <Title className="text-right">
            Every mile of this <br />
            <span className="text-green-600">JOURNEY</span> will be a <br />
            Revolution.
          </Title>

          <p>
            JOIN US AND BE PART OF THE DIGITAL ROCKET CREW LET'S BE THE FIRST TO
            STEP ON THE LAND OF THE NEW WORLD. EVERY MILE OF THIS JOURNEY WILL
            BE A REVOLUTION.
            <br />
            HEY! DON'T MISS YOUR SEAT, WE'RE ABOUT TO DEPART …AND DON'T FORGET
            TO
            <br />
            ENJOY THE RIDE. WHAT WOULD YOU LIKE TO DRINK?
          </p>
        </div>

        {/* <StaticImage src="../images/rocket.png" alt="" />
        <StaticImage
          className="w-full h-auto"
          src="../images/earth_1.jpg"
          alt=""
        /> */}
      </section>

      <section>
        <div className="flex flex-col items-center w-full">
          <Title className="text-center">
            …TAKEOFF!, WE HAVE TAKEOFF! <br />
            DIGITAL ROCKET IS ALREADY IN SPACE
          </Title>
        </div>

        {/* <StaticImage src="../images/astronaut_1.png" alt="" />
        <StaticImage
          className="w-full h-auto"
          src="../images/planets_4.jpg"
          alt=""
        /> */}
      </section>

      <section>
        <div className="flex flex-col items-center w-full">
          <div className="bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
            <Title>Welcome</Title>
            <p>THIS IS YOUR CAPTAIN SPEAKING.</p>
          </div>

          <p>
            “THE CREW IS READY FOR THE MISSION 22 SECONDS REMAINING AND COUNTING
            FOR LAUNCH THE OBJECTIVE OF THE MISSION WILL BE TO CONQUER THE
            IMPOSSIBLE. THE TANKS ARE FULL OF ENERGY. ASTRONAUTS AT THEIR POSTS
            THE FIRING SEQUENCE BEGINS ALL ENGINES RUNNING”
          </p>

          <h2>IGNITION</h2>
        </div>

        {/* <StaticImage src="../images/crew.png" alt="" />
        <StaticImage class="w-full h-auto" src="../images/moon_1.jpg" alt="" /> */}
      </section>

      <section>
        <div className="flex flex-col items-center w-full">
          <div className="bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
            <Title>Crew</Title>
          </div>

          <p>
            I.V THERE ARE PEOPLE WHO GET OUT OF THE BOX BEFORE OTHERS. I.V. HE
            DOES IT EVERY DAY AND FINDS NEW WAYS TO HACK THIS MATRIX. <br />
            G.P LOOKING AT OPPORTUNITIES AND PUTTING THE PIECES TOGETHER FOR THE
            OBJECTIVE IS KEY, BUT THEN MAKING THEM WORK IS BETTER. <br />
            C.V FROM ITS SILENCE ARTICULATES POSSIBLE WORLDS. EVERY INTERACTION
            CAN CHANGE THE COURSE OF THINGS. <br />
            S.A A SPARK OF GENIUS IS ABOUT TO EXPLODE, YOU DON'T KNOW WHEN, BUT
            YOU KNOW IT WILL COME. <br />
            J.M CROSSES MATTER TO GO IN SEARCH OF THE IDEAS FOT THE FUTURE. GIVE
            IT A BLANK SHEET AND IT WILL FILL THE VOID.
          </p>
        </div>

        {/* ! TODO: Missing astronauts image */}
        {/* <StaticImage src="../images/logo.png" alt="" />
        <StaticImage class="w-full h-auto" src="../images/moon_2.jpg" alt="" /> */}
      </section>

      <section>
        <div className="flex flex-col items-center w-full">
          <div className="bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
            <Title>Roadmap</Title>
          </div>

          <div>
            <div>
              <div>
                <h2>WITHOUT MASK SOCIETY</h2>
                <p>MINT DATE - JUNE 2022</p>
              </div>
              <div>
                <h2>HAPPYICE</h2>
                <p>MINT DATE - SEPTEMBER 2022</p>
              </div>
              <div>
                <h2>RETROTV</h2>
                <p>MINT DATE - DECEMBER 2022</p>
              </div>
              <div>
                <h2>FUNNY COOKIES</h2>
                <p>MINT DATE - FEBRUARY 2023</p>
              </div>
              <div>
                <h2>MAGICAL BIRTHDAY ELF</h2>
                <p>MINT DATE - APRIL 2023</p>
              </div>
              <div>
                <h2>CRYPTO ANGELS</h2>
                <p>MINT DATE - JUNE 2023</p>
              </div>
              <div>
                <h2>MAGIC TREES</h2>
                <p>MINT DATE - AUGUST 2023</p>
              </div>
            </div>
            <div>{/* ! TODO: Roadmap images */}</div>
          </div>
        </div>

        {/* <StaticImage
          class="w-full h-auto"
          src="../images/planets_4.jpg"
          alt=""
        /> */}
      </section>

      <Footer />
    </div>
  );
};
