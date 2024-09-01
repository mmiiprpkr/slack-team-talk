import { useParams } from "next/navigation";

import { Id } from "../../convex/_generated/dataModel";

export const useWorkspaceId = () => {
  const params = useParams<{ workspaceId: Id<"workspaces"> }>();

  return params.workspaceId;
};