import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        // Fetch data using async/await
        const res = await fetch(url, { signal: abortController.signal });

        // Check for successful response
        if (!res.ok) {
          throw new Error("Could not fetch data");
        }

        // Parse response as JSON
        const data = await res.json();

        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        // Handle errors, excluding the abort error
        if (err.name !== "AbortError") {
          setError(err.message);
          setIsPending(false);
        }
      }
    };

    fetchData();

    // Cleanup function to abort fetch on component unmount
    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
