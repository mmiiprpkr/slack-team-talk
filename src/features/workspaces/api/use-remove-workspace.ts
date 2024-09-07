import { useMutation } from "@tanstack/react-query";
import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "../../../../convex/_generated/api";

export const useRemoveWorkspace = () => {
  const removeWorkspace = useMutation({
    mutationFn: useConvexMutation(api.workspaces.remove)
  });

  return removeWorkspace;
};