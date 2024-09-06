import { useQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

type Props = {
  workspaceId: Id<"workspaces">;
};

export const useCurrentMember = ({ workspaceId }: Props) => {
  const { data, isLoading } = useQuery(
    convexQuery(api.members.current, { workspaceId })
  );

  return { data, isLoading };
};
