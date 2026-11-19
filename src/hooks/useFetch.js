import { useEffect, useState } from "react";
import api from "../utils/api"
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    api
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { isLoading, error, data };
};
export default useFetch;
