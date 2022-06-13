import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  milestone_title: string;
  milestone_description: string;
}

export const Milestone: React.FC<Props> = ({
  milestone_title,
  milestone_description,
}) => {
  return (
    <div className="grid w-full grid-cols-2 place-items-center">
      <div className="flex flex-col items-end">
        <h2 className="font-[Aliseo] text-purple-600 font-bold text-2xl">
          {milestone_title}
        </h2>
        <p className="font-bold">{milestone_description}</p>
      </div>

      <div className="flex">
        <StaticImage className="w-28" src="../images/1.png" alt="" />
      </div>
    </div>
  );
};
