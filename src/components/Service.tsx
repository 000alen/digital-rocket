import React from "react";

import { IdeaIcon } from "./icons/IdeaIcon";

interface Props {}

export const Service: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col justify-around w-full h-full gap-8 p-8 bg-black">
      <div className="flex flex-col items-center gap-2">
        <IdeaIcon className="w-24 h-24" />
        <p>STRATEGY</p>
      </div>

      <div>
        <p>
          LET'S START PLANNING THE STRATEGY TO MAKE YOUR IDEA KNOWN TO THE
          WORLD. LET'S DESIGN THE ROADMAP TO COVER EACH STAGE OF YOUR PROJECT-
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
  );
};
