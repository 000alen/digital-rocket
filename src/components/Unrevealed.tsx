import React from "react";

import { DRLogo } from "./DRLogo";

interface Props {}

export const Unrevealed: React.FC<Props> = ({}) => {
  return (
    <div className="grid content-center w-28 h-32 opacity-50 bg-fuchsia-800 border-fuchsia-900 border-2">
      <DRLogo className="w-full"/>
    </div>
  );
};
