import { Platform } from "./Platform";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  description: string;
  description_raw: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  slug: string;
};
