import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

// @ts-ignore
import Background from "../assets/file.mp4";
import { Nav } from "../components/Nav";
// import { Stars } from "../components/Stars";
import { Title } from "../components/Title";

interface Props {}

export const IndexLayout = ({}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.playbackRate = 0.5;
    }
  });

  return (
    <div id="top" className="flex flex-col">
      <Helmet>
        <title>Digital Rocket</title>
      </Helmet>

      {/* <Stars /> */}

      <Nav />

      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        loop
        className="fixed inset-0 object-cover w-full h-full -z-10"
      >
        <source src={Background} type="video/mp4" />
      </video>

      <section id="hero" className="relative max-w-3xl mx-auto my-24">
        <div className="flex flex-col items-center w-full gap-8 p-4">
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
          className="!absolute -z-[1] opacity-50 -bottom-44 -right-44 w-full max-w-xl h-auto"
          src="../images/planet.png"
          alt=""
        />
      </section>

      <section id="about" className="relative">
        <Title className="mb-24 text-center">
          …TAKEOFF!, WE HAVE TAKEOFF! <br />
          <span className="text-green-600">DIGITAL ROCKET</span> IS ALREADY IN
          SPACE
        </Title>

        <div className="flex flex-col items-center w-full max-w-3xl p-4 pb-0 mx-auto">
          <StaticImage src="../images/astronaut_1.png" alt="" />
        </div>
      </section>

      <section id="welcome" className="relative">
        <div className="flex flex-col items-center w-full p-4 bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <Title>Welcome</Title>
          <p>THIS IS YOUR CAPTAIN SPEAKING.</p>
        </div>

        <div className="flex flex-col items-center w-full max-w-3xl p-4 mx-auto">
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

      {/* <Stars /> */}

      <section id="crew" className="relative">
        <div className="flex flex-col items-center w-full max-w-3xl p-4 pb-24 mx-auto">
          <StaticImage src="../images/crew.png" alt="" />
          <Title className="w-full text-left">Crew</Title>
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
        </div>
      </section>

      <section id="roadmap" className="relative">
        {/* <div className="flex flex-col items-center p-4 bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <Title>Roadmap</Title>
        </div> */}

        <div className="flex flex-col items-center w-full max-w-3xl p-4 pb-24 mx-auto">
          <Title className="w-full text-left">Roadmap</Title>
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
      </section>

      <section id="donation" className="relative">
        {/* <div className="flex flex-col items-center w-full p-4 bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <Title>Donation</Title>
        </div> */}

        <div className="flex flex-col items-center w-full max-w-3xl p-4 pb-0 mx-auto">
          <Title className="w-full text-left">Donation</Title>
          <p className="mb-24 font-bold">
            10% of your NFT purchase will go to the Spanish company NANTEK who
            developed technology to transform the plastic of clinical masks into
            hydrogen fuel. For every kilogram of recycled mask you can generate
            one kilogram of hydrogen. For each NFT in Floor Price you will be
            recycling x kilograms of masks and eliminating x kilograms of
            disused plastics.
          </p>

          <StaticImage src="../images/astronaut_1.png" alt="" />
        </div>
      </section>

      <section id="services" className="relative">
        <div className="flex flex-col items-center w-full p-4 bg-green-400 bg-opacity-50 border-t-2 border-b-2 border-green-400">
          <Title>Services</Title>
        </div>

        <div className="relative flex flex-col items-center w-full max-w-3xl p-4 pb-0 mx-auto">
          <p className="mb-24 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eligendi
            accusantium nesciunt magni quod ex magnam iusto harum earum est
            accusamus excepturi natus soluta eaque officiis ipsa. Officiis,
            praesentium exercitationem?
          </p>

          <div className="flex justify-end w-full -mb-48">
            <StaticImage
              className="w-48 h-48"
              src="../images/logo.png"
              alt=""
            />
          </div>

          <StaticImage src="../images/astronauts.png" alt="" />
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
    </div>
  );
};
