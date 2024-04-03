import { Suspense } from "react";
import MovieInfo from "../../../../components/MovieInfo";
import MovieVideos from "../../../../components/MovieVideos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h2>Movie Detail Page</h2>
      <Suspense fallback={<h1>MovieInfo 로딩...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>MovieVideos 로딩...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
