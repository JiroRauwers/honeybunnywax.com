export const fetcher = <T extends unknown>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> => fetch(input, init).then((res) => res.json() as T);
