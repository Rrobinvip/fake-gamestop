import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // To prevent state update on an unmounted component
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}key=${process.env.REACT_APP_RAWG_API_KEY}`);
        if (!response.ok) throw new Error("Network response was not ok");

        const result = await response.json();
        if (isMounted) setData(result);
      } catch (error) {
        if (isMounted) setError(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup
    };
  }, [url]);

  return { data, error };
};

export default useFetch;
