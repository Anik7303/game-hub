import { useEffect, useState } from "react";

import apiClient, { CanceledError } from "../services/api-client";

type Genre = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

type FetchGenresResponse = {
  count: number;
  results: Genre[];
};

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isLoading };
}

export default useGenres;
