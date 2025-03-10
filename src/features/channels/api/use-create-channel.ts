import { useMutation } from "@tanstack/react-query";
import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "../../../../convex/_generated/api";

export const useCreateChannel = () => {
  const createWorkspace = useMutation({
    mutationFn: useConvexMutation(api.channels.create)
  });

  return createWorkspace;
};