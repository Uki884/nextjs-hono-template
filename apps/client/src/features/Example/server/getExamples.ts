import "server-only";

import { apiClient } from "@/src/shared/lib/apiClient";
import { cache } from "react";

export const getExamples = cache(async () => {
  const data = await apiClient.api.examples.$get();

  const { result } = await data.json();
  return result;
});
