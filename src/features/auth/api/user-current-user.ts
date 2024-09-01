import { useQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../../../convex/_generated/api"; 

export const useCurrentUser = () => {
  const { data, isLoading } = useQuery(
    convexQuery(api.user.current, {}),
  );

  return { data, isLoading};
};