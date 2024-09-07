import { useMutation } from "@tanstack/react-query";
import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "../../../../convex/_generated/api";

export const useUpdateWorkspace = () => {
  const updateWorkspace = useMutation({
    mutationFn: useConvexMutation(api.workspaces.update)
  });

  return updateWorkspace;
};