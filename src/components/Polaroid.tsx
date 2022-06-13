import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  className?: string;
  caption?: string;
  scotch?: boolean;
}

export const Polaroid: React.FC<Props> = ({
  children,
  caption,
  scotch = true,
  className = "",
}) => {
  return (
    <div className={className}>
      <div
        className="relative flex flex-col gap-2 p-2 bg-white w-min"
      >
        {scotch && (
          <>
            <div className="!absolute -left-8 -top-8 scotch"></div>
            <div className="!absolute -right-8 -top-8 scotch-right"></div>
          </>
        )}
        {children}
        {caption && (
          <h2 className="text-center font-[Aliseo] text-black">{caption}</h2>
        )}
      </div>
    </div>
  );
};
