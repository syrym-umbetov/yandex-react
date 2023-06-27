"use client";

import Box from "@/components/Box/Box";
import styles from "./Movie.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "@/app/variables";
import { MovieType, ReviewType } from "@/@types/movie";
import Image from "next/image";
import placeholder from "../../../assets/placeholder.png";

export default function Movie({ params }: { params: { slug: string } }) {
  const { wrapper, parent, title, description, image, reviewTitle } = styles;
  const [movie, setMovie] = useState<MovieType>({} as MovieType);
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(API + `movie?movieId=${params.slug}`);
      const reviews = await axios.get(API + `reviews?movieId=${params.slug}`);

      setReviews(reviews?.data);
      setMovie(data);
    };
    fetchMovie();
  }, [params.slug]);

  return (
    <div className={wrapper}>
      <Box>
        <div className={parent}>
          <Image
            className={image}
            src={movie.posterUrl}
            loader={({ src }) => src}
            width='400'
            alt='poster'
            height='500'
          />
          <div>
            <div className={title}>{movie.title}</div>
            <div>
              <b>Жанр:</b> {movie.genre}
            </div>
            <br />
            <div>
              <b>Год выпуска:</b> {movie.releaseYear}
            </div>
            <br />
            <div>
              <b>Режиссер:</b> {movie.director}
            </div>
            <br />
            <div>
              <div>
                <b>Описание</b>
              </div>
              <br />

              <div className={description}>{movie.description}</div>
            </div>
          </div>
        </div>
      </Box>
      {reviews?.map((item) => (
        <>
          <Box>
            <div className={parent}>
              <Image src={placeholder} loader={({ src }) => src} width='100' alt='poster' height='100' />
              <div style={{ flex: 1 }}>
                <div className={reviewTitle}>
                  <b>{item.name}</b>
                  <span>Оценка: {item.rating}</span>
                </div>
                <br />
                <div className={description}>{item.text}</div>
              </div>
            </div>
          </Box>
          <br />
        </>
      ))}
    </div>
  );
}
