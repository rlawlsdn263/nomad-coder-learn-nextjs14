import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching Movie: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching Videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("===============");
  console.log("Start Fetching!");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("End Fetching!");

  return <div>{movie.title}</div>;
}
