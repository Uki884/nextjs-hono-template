import { ClientResponse } from "@app/server/types";

export async function fetcher<T>(response: Promise<ClientResponse<T>>) {
  const result = await response;
  return result.json() as Promise<T>
}
