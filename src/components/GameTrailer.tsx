import useTrailers from "../hooks/useTrailers";

type Props = {
  gameId: number;
};

function GameTrailer({ gameId }: Props) {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (error) throw error;
  if (isLoading) return null;
  if (!trailers || trailers.length === 0) return null;
  return (
    <video controls src={trailers[0].data[480]} poster={trailers[0].preview} />
  );
}

export default GameTrailer;
