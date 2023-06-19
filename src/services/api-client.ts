import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8d9fb6be6f9a44299a7425b869b23e06",
  },
});
