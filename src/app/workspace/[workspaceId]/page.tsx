"use client";

import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  const { data, isLoading } = useGetWorkspace({ workspaceId });

  return (
    <div>
      <h1>{ isLoading ? "Loading..." : "workspace id page" }</h1>
    </div>
  );
};
 
export default WorkspaceIdPage;