import type { ClientResponse } from "@app/server/types";

export async function fetcher<T>(response: Promise<ClientResponse<T>>) {
	const result = await response;
	if (!result.ok) {
		throw new Error(result.statusText);
	}
	return result.json() as Promise<T>;
}
