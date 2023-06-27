"use client";
import Box from "@/components/Box/Box";
import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import FilmCard from "@/components/FilmCard/FilmCard";
import axios from "axios";
import { API } from "@/app/variables";
import { MovieType } from "@/@types/movie";
import { createPortal } from "react-dom";
import global from "@/store/global";
import { observer } from "mobx-react-lite";
import Loader from "@/components/Loader/Loader";

const Main = observer(() => {
  const { wrapper, title, filter, hasArrow, moviesWrapper } = styles;

  const { movies, setMovies } = global;

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchingMovies = async () => {
      setLoader(true);
      const { data } = await axios.get(API + "movies");
      setMovies(data);
      setLoader(false);
    };
    fetchingMovies();
  }, [setMovies]);

  const [openGenre, setOpenGenre] = useState(false);

  if (loader)
    return (
        <Loader />
    );

  return (
    <div className={wrapper}>
      <div style={{ width: "25.5rem", height: "43.875rem", position: "fixed", boxSizing: "border-box" }}>
        <Box height='100%' width='100%'>
          <div className={title}>Фильтр поиска</div>
          <div className={filter}>
            <div>Название</div>
            <input placeholder='Введите название' />
          </div>
          <div className={filter}>
            <div>Жанр</div>
            <input placeholder='Введите жанр' className={hasArrow} onClick={() => setOpenGenre(true)} />
            {/* {openGenre && createPortal(<div>qwejoqwje</div>, document.body)} */}
          </div>
          <div className={filter}>
            <div>Кинотеатр</div>
            <input placeholder='Введите кинотеатр' className={hasArrow} />
          </div>
        </Box>
      </div>

      <div style={{ width: "35rem" }}></div>

      <div className={moviesWrapper}>
        {movies?.map((item) => (
          <FilmCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});

export default Main;
