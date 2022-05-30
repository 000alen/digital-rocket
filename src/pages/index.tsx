import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Title } from "../components/Title";

interface Props {}

export default ({}: Props) => {
  return (
    <div className="flex flex-col max-w-6xl gap-12 mx-auto scroll-smooth">
      <Helmet>
        <title>Digital Rocket</title>
      </Helmet>

      <Nav />

      <section className="relative">
        <div className="flex flex-col items-center w-full max-w-3xl p-2 mx-auto">
          <Title className="text-right">
            Every mile of this <br />
            <span className="text-green-600">JOURNEY</span> will be a <br />
            Revolution.
          </Title>

          <StaticImage src="../images/rocket.png" alt="" />

          <p className="font-bold">
            JOIN US AND BE PART OF THE DIGITAL ROCKET CREW LET'S BE THE FIRST TO
            STEP ON THE LAND OF THE NEW WORLD. EVERY MILE OF THIS JOURNEY WILL
            BE A REVOLUTION.
            <br />
            <br />
            HEY! DON'T MISS YOUR SEAT, WE'RE ABOUT TO DEPART …AND DON'T FORGET
            TO
            <br />
            <br />
            ENJOY THE RIDE. WHAT WOULD YOU LIKE TO DRINK?
          </p>
        </div>

        <StaticImage
          className="!absolute -z-[1] bottom-0 w-full h-auto"
          src="../images/earth_1.jpg"
          alt=""
        />
      </section>

      <section className="relative">
        <div className="flex flex-col items-center w-full max-w-3xl p-2 mx-auto">
          <Title className="text-center">
            …TAKEOFF!, WE HAVE TAKEOFF! <br />
            <span className="text-green-600">DIGITAL ROCKET</span> IS ALREADY IN
            SPACE
          </Title>
          <StaticImage src="../images/astronaut_1.png" alt="" />
        </div>

        <StaticImage
          className="!absolute bottom-0 -z-[2] w-full h-auto"
          src="../images/planets_4.jpg"
          alt=""
        />
      </section>

      <section className="relative">
        <div className="flex flex-col items-center w-full p-2 bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <Title>Welcome</Title>
          <p>THIS IS YOUR CAPTAIN SPEAKING.</p>
        </div>

        <div className="flex flex-col items-center w-full max-w-3xl p-2 mx-auto">
          <p>
            “THE CREW IS READY FOR THE MISSION 22 SECONDS REMAINING AND COUNTING
            FOR LAUNCH THE OBJECTIVE OF THE MISSION WILL BE TO CONQUER THE
            IMPOSSIBLE. THE TANKS ARE FULL OF ENERGY. ASTRONAUTS AT THEIR POSTS
            THE FIRING SEQUENCE BEGINS ALL ENGINES RUNNING”
          </p>

          <h2 className="font-[Aliseo] text-purple-600 self-start font-bold text-2xl">
            IGNITION
          </h2>
        </div>

        <StaticImage src="../images/crew.png" alt="" />
        <StaticImage
          class="!absolute blur inset-x-0 top-0 -z-[3] w-full h-auto"
          src="../images/moon_1.jpg"
          alt=""
        />
      </section>

      <section className="relative">
        <div className="flex flex-col items-center w-full p-2 bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <Title>Crew</Title>
        </div>

        <div className="flex flex-col items-center w-full max-w-3xl p-2 mx-auto">
          <p>
            I.V THERE ARE PEOPLE WHO GET OUT OF THE BOX BEFORE OTHERS. I.V. HE
            DOES IT EVERY DAY AND FINDS NEW WAYS TO HACK THIS MATRIX. <br />
            <br />
            G.P LOOKING AT OPPORTUNITIES AND PUTTING THE PIECES TOGETHER FOR THE
            OBJECTIVE IS KEY, BUT THEN MAKING THEM WORK IS BETTER. <br />
            <br />
            C.V FROM ITS SILENCE ARTICULATES POSSIBLE WORLDS. EVERY INTERACTION
            CAN CHANGE THE COURSE OF THINGS. <br />
            <br />
            S.A A SPARK OF GENIUS IS ABOUT TO EXPLODE, YOU DON'T KNOW WHEN, BUT
            YOU KNOW IT WILL COME. <br />
            <br />
            J.M CROSSES MATTER TO GO IN SEARCH OF THE IDEAS FOT THE FUTURE. GIVE
            IT A BLANK SHEET AND IT WILL FILL THE VOID.
          </p>
          {/* ! TODO: Missing astronauts image */}
          {/* <StaticImage src="../images/logo.png" alt="" /> */}
          <StaticImage src="../images/astronaut_1.png" alt="" />
        </div>

        <StaticImage
          class="!absolute bottom-0 -z-[4] w-full h-auto"
          src="../images/moon_2.jpg"
          alt=""
        />
      </section>

      <section className="relative">
        <div className="flex flex-col items-center p-2 bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <Title>Roadmap</Title>
        </div>

        <div className="flex flex-col items-center w-full max-w-3xl p-2 mx-auto">
          <div className="flex w-full gap-8">
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col items-end">
                <h2 className="font-[Aliseo] text-purple-600 font-bold text-2xl">
                  WITHOUT MASK SOCIETY
                </h2>
                <p className="font-bold">MINT DATE - JUNE 2022</p>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="font-[Aliseo] text-purple-600 font-bold text-2xl">
                  WITHOUT MASK SOCIETY
                </h2>
                <p className="font-bold">MINT DATE - JUNE 2022</p>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="font-[Aliseo] text-purple-600 font-bold text-2xl">
                  WITHOUT MASK SOCIETY
                </h2>
                <p className="font-bold">MINT DATE - JUNE 2022</p>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="font-[Aliseo] text-purple-600 font-bold text-2xl">
                  WITHOUT MASK SOCIETY
                </h2>
                <p className="font-bold">MINT DATE - JUNE 2022</p>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="font-[Aliseo] text-purple-600 font-bold text-2xl">
                  WITHOUT MASK SOCIETY
                </h2>
                <p className="font-bold">MINT DATE - JUNE 2022</p>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="font-[Aliseo] text-purple-600 font-bold text-2xl">
                  WITHOUT MASK SOCIETY
                </h2>
                <p className="font-bold">MINT DATE - JUNE 2022</p>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="font-[Aliseo] text-purple-600 font-bold text-2xl">
                  WITHOUT MASK SOCIETY
                </h2>
                <p className="font-bold">MINT DATE - JUNE 2022</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-end">
                <StaticImage className="w-28" src="../images/1.png" alt="" />
              </div>

              <div className="flex">
                <StaticImage className="w-28" src="../images/1.png" alt="" />
              </div>

              <div className="flex justify-end">
                <StaticImage className="w-28" src="../images/1.png" alt="" />
              </div>

              <div className="flex">
                <StaticImage className="w-28" src="../images/1.png" alt="" />
              </div>

              <div className="flex justify-end">
                <StaticImage className="w-28" src="../images/1.png" alt="" />
              </div>

              <div className="flex">
                <StaticImage className="w-28" src="../images/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <StaticImage
          class="!absolute blur bottom-0 -z-[5] w-full h-auto"
          src="../images/planets_4.jpg"
          alt=""
        />
      </section>

      <section className="relative">
        <div className="flex flex-col items-center w-full p-2 bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <Title>Donation</Title>
        </div>

        <div className="flex flex-col items-center w-full max-w-3xl p-2 mx-auto">
          <p className="font-bold">
            10% of your NFT purchase will go to the Spanish company NANTEK who
            developed technology to transform the plastic of clinical masks into
            hydrogen fuel. For every kilogram of recycled mask you can generate
            one kilogram of hydrogen. For each NFT in Floor Price you will be
            recycling x kilograms of masks and eliminating x kilograms of
            disused plastics.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};
