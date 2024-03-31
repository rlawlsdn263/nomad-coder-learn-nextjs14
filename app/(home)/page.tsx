"use client";

import { useState, useEffect } from "react";

export default function Home() {
  // 1. movies 데이터를 담을 state 생성
  const [movies, setMovies] = useState();

  // 2. movies 데이터를 호출하고, setMovies에 업데이트할 함수 생성
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
  };

  // 3. useEffect를 사용해 getMovies 함수를 실행시킴
  useEffect(() => {
    getMovies();
  }, []);

  // 4. movies state를 렌더링함
  return <div>{JSON.stringify(movies)}</div>;
}
