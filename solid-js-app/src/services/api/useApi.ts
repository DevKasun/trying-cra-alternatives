import { createSignal, createResource } from "solid-js";

export function useAPI<T>(
  fetcher: () => Promise<T>,
  initialValue: T | null = null,
) {
  const [isLoading, setIsLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);
  const [data, setData] = createSignal<T | null>(initialValue);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await fetcher();
      setData(() => result as Exclude<T, Function>);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
}
