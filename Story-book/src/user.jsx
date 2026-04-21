
import {  useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
  
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error,setError] = useState(null);

useEffect(() => {
    setLoading(true);
    setError(null);

    const source = axios.CancelToken.source();

    axios.get(url, { cancelToken: source.token })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setError("An error occurred");
          setLoading(false);
        }
      });

    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error }; // ✅ IMPORTANT
};

   


export default useFetch;