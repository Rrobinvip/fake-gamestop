import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Prevent on un-necessary data fetch on re-render with the same url.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}&key=${process.env.REACT_APP_RAWG_API_KEY}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
