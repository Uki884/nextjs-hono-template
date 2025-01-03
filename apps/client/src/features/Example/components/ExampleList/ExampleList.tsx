import { apiClient } from "@/src/shared/lib/apiClient";
import { fetcher } from "@/src/shared/lib/fetcher";

export const ExampleList = async () => {
  const data = await fetcher(apiClient.api.examples.$get());
  return <div>{JSON.stringify(data.result)}</div>;
};
