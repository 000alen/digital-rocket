import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {}

export const Milestone: React.FC<Props> = ({}) => {
  return (
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
  );
};
