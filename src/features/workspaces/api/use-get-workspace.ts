import { useQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../../../convex/_generated/api"; 
import { Id } from "../../../../convex/_generated/dataModel";

type Props = {
  workspaceId: Id<"workspaces">;
};

export const useGetWorkspace = ({ workspaceId }: Props) => {
  const workspace = useQuery(
    convexQuery(api.workspaces.getById, {
      id: workspaceId,
    }),
  );

  return workspace;
};