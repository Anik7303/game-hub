import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

type Game = {
  id: number;
  name: string;
  background_image: string;
  description: string;
  description_raw: string;
  genres: Genre[];
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  publishers?: Publisher[];
  rating_top: number;
  slug: string;
};

export default Game;
