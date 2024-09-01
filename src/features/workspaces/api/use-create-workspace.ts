import { useMutation } from "@tanstack/react-query";
import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "../../../../convex/_generated/api";

export const useCreateWorkspace = () => {
  const createWorkspace = useMutation({
    mutationFn: useConvexMutation(api.workspaces.create)
  });

  return createWorkspace;
};