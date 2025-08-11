import { useState, useEffect, useCallback } from "react";

type HookReturnType<T> = {
  loading: boolean;
  data: T;
  error: string;
};

const useHttp = <T,>(fetchFn: () => Promise<T>): HookReturnType<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>(null as unknown as T);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await fetchFn();
      setData(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      setLoading(false);
    }
  }, [fetchFn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data, error };
};

export default useHttp;
