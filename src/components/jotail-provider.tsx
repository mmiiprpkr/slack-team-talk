"use client";

import { Provider } from "jotai";

type Props = {
  children: React.ReactNode;
};

export const JotailProvider = ({ children }: Props) => {
  return <Provider>{children}</Provider>;
};
