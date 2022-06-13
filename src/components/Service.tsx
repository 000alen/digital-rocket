import React from "react";

import { IdeaIcon } from "./icons/IdeaIcon";
import { Markdown } from "./Markdown";

interface Props {
  color?: string;
  service_name: string;
  service_description: string;
  service_markdown: string;
}

export const Service: React.FC<Props> = ({
  color = "#000000",
  service_name,
  service_description,
  service_markdown,
}) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <div style={style} className="flex flex-col w-full h-full gap-8 p-8">
      <div className="flex flex-col items-center gap-2">
        <IdeaIcon className="w-24 h-24" />
        <Markdown>{service_name}</Markdown>
      </div>

      <div>
        <Markdown>{service_description}</Markdown>
        <Markdown>{service_markdown}</Markdown>
      </div>
    </div>
  );
};
