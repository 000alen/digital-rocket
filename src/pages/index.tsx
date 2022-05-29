import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

interface Props {}

export default ({}: Props) => {
  return (
    <div className="scroll-smooth">
      <Helmet>
        <title>Digital Rocket</title>
      </Helmet>

      <Nav />

      <section>
        <h1>
          Every mile of this <br />
          JOURNEY will be a <br />
          Revolution.
        </h1>

        <p>
          JOIN US AND BE PART OF THE DIGITAL ROCKET CREW LET'S BE THE FIRST TO
          STEP ON THE LAND OF THE NEW WORLD. EVERY MILE OF THIS JOURNEY WILL BE
          A REVOLUTION.
          <br />
          HEY! DON'T MISS YOUR SEAT, WE'RE ABOUT TO DEPART …AND DON'T FORGET TO
          <br />
          ENJOY THE RIDE. WHAT WOULD YOU LIKE TO DRINK?
        </p>

        <StaticImage src="../images/rocket.png" alt="" />
        <StaticImage
          className="w-full h-auto"
          src="../images/earth_1.jpg"
          alt=""
        />
      </section>

      <section>
        <h1>
          …TAKEOFF!, WE HAVE TAKEOFF! <br />
          DIGITAL ROCKET IS ALREADY IN SPACE
        </h1>
        <StaticImage src="../images/astronaut_1.png" alt="" />
        <StaticImage
          className="w-full h-auto"
          src="../images/planets_4.jpg"
          alt=""
        />
      </section>

      <section>
        <div className="bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <h1>Welcome</h1>
          <p>THIS IS YOUR CAPTAIN SPEAKING.</p>
        </div>

        <p>
          “THE CREW IS READY FOR THE MISSION 22 SECONDS REMAINING AND COUNTING
          FOR LAUNCH THE OBJECTIVE OF THE MISSION WILL BE TO CONQUER THE
          IMPOSSIBLE. THE TANKS ARE FULL OF ENERGY. ASTRONAUTS AT THEIR POSTS
          THE FIRING SEQUENCE BEGINS ALL ENGINES RUNNING”
        </p>

        <h2>IGNITION</h2>

        <StaticImage src="../images/crew.png" alt="" />
        <StaticImage class="w-full h-auto" src="../images/moon_1.jpg" alt="" />
      </section>

      <section>
        <div className="bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <h1>Crew</h1>
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

        <StaticImage src="../images/logo.png" alt="" />
        {/* ! TODO: Missing astronauts image */}
        <StaticImage class="w-full h-auto" src="../images/moon_2.jpg" alt="" />
      </section>

      <section>
        <div className="bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <h1>Roadmap</h1>
        </div>

        <div>
          <div>
            <div>
              <h1>WITHOUT MASK SOCIETY</h1>
              <p>MINT DATE - JUNE 2022</p>
            </div>
            <div>
              <h1>HAPPYICE</h1>
              <p>MINT DATE - SEPTEMBER 2022</p>
            </div>
            <div>
              <h1>RETROTV</h1>
              <p>MINT DATE - DECEMBER 2022</p>
            </div>
            <div>
              <h1>FUNNY COOKIES</h1>
              <p>MINT DATE - FEBRUARY 2023</p>
            </div>
            <div>
              <h1>MAGICAL BIRTHDAY ELF</h1>
              <p>MINT DATE - APRIL 2023</p>
            </div>
            <div>
              <h1>CRYPTO ANGELS</h1>
              <p>MINT DATE - JUNE 2023</p>
            </div>
            <div>
              <h1>MAGIC TREES</h1>
              <p>MINT DATE - AUGUST 2023</p>
            </div>
          </div>
          <div>{/* ! TODO: Roadmap images */}</div>
        </div>

        <StaticImage
          class="w-full h-auto"
          src="../images/planets_4.jpg"
          alt=""
        />
      </section>

      <Footer />
    </div>
  );
};
