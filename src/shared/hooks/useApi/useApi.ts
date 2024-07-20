import { useMemo } from "react";
import { AxiosAdapter } from "src/shared/api/adapters/axios";
import ApiPort from "src/shared/api/ports/ApiPort";
import FetchAdapter from "src/shared/api/adapters/fetch/FetchAdapter";

/**
 * Custom hook to initialize the API port and adapter.
 * @returns {ApiPort} - The initialized API port with the HttpClient.
 */
export function useApi(): ApiPort {
  const adapter = useMemo(() => new AxiosAdapter(), []);
  // const adapter = useMemo(() => new FetchAdapter(), []);

  const api = useMemo(() => new ApiPort(adapter), []);

  return api;
}
