import React from "react";

import { usePreferredLanguage } from "../components/usePreferredLanguage";
import { NotFoundLayout } from "../layouts/404";

interface Props {}

export default function Template({}: Props) {
  usePreferredLanguage();

  return <NotFoundLayout />;
}
