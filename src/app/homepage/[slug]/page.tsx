"use client";

import Box from "@/components/Box/Box";
import styles from "./Movie.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "@/app/variables";
import { MovieType } from "@/@types/movie";
import Image from "next/image";

export default function Movie({ params }: { params: { slug: string } }) {
  const { wrapper } = styles;
  const [movie, setMovie] = useState<MovieType>({} as MovieType);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(API + `movie?movieId=${params.slug}`);
      setMovie(data);
    };
    fetchMovie();
  }, [params.slug]);

  return (
    <div className={wrapper}>
      <Box>
        <Image src={movie.posterUrl} loader={({ src }) => src} width='400' alt='poster' height='500' />
      </Box>
    </div>
  );
}
