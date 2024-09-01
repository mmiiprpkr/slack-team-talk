"use client";

import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";

type Props = {
  children: React.ReactNode;
};

const WorkspaceIdLayout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceIdLayout;