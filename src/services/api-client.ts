import axios, { AxiosRequestConfig } from "axios";

export type FetchResponse<T> = {
  count: number;
  next: string | null;
  results: T[];
};

const instance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8d9fb6be6f9a44299a7425b869b23e06",
  },
});

export default class APIClient<T> {
  constructor(public endpoint: string) {}

  get = (config?: AxiosRequestConfig): Promise<FetchResponse<T>> =>
    instance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}
