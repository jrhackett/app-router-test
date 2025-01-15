const sleep = (timeInMs: number) =>
  new Promise((res) => setTimeout(res, timeInMs));

// API fetchers
type FetchOptions = Parameters<typeof fetch>[1];
const createFetcher = (url: string) => {
  return async (fetchOptions?: FetchOptions) => {
    await sleep(4000);
    return await fetch(url, fetchOptions);
  };
};

// JSON Placeholder fetchers
export const fetchThings = createFetcher("https://jsonplaceholder.typicode.com/posts");
