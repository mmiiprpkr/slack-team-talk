import { useQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../../../convex/_generated/api"; 

export const useGetWorkspaces = () => {
  const { data, isLoading } = useQuery(
    convexQuery(api.workspaces.get, {}),
  );

  return { data, isLoading};
};