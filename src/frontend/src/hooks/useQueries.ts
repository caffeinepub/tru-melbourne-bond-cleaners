import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Submission } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery<Submission[]>({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      serviceType: string;
      address: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      await actor.submitContactForm(
        data.name,
        data.phone,
        data.serviceType,
        data.address,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
    },
  });
}
