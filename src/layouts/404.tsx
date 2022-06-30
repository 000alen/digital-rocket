import React from "react";

import { Title } from "../components/Title";

interface Props {}

export const NotFoundLayout = ({}: Props) => {
  return (
    <div>
      <main className="flex flex-col items-center p-8">
        <Title>Not Found 😥</Title>

        <p className="font-mono italic">
          We cannot find the page you requested.
        </p>
      </main>
    </div>
  );
};
