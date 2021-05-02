import axios from "axios";
import { useEffect, useState } from "react";

export const useFetcher = (
  url: string
): [any[], boolean, string, CallableFunction] => {
  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const _fetcher = async () => {
      try {
        const data = await axios.get(url).then((resp) => resp.data);
        setResult(data);
        setLoading(false);
        setError("");
      } catch (e) {
        setError(e.message);
        setLoading(false);
        setResult([]);
      }
    };
    _fetcher();
  }, [url]);

  const hasError = () => {
    return error.length !== 0;
  };

  return [result, loading, error, hasError];
};
