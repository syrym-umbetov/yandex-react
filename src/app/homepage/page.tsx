"use client";
import Box from "@/components/Box/Box";
import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import FilmCard from "@/components/FilmCard/FilmCard";
import axios from "axios";
import { API } from "@/app/variables";
import global from "@/store/global";
import { observer } from "mobx-react-lite";
import Loader from "@/components/Loader/Loader";

const Main = observer(() => {
  const { wrapper, title, filter, hasArrow, moviesWrapper } = styles;
  const [openGenre, setOpenGenre] = useState(false);

  const { movies, setMovies, filterByName, filtered, setFilter, setName, name } = global;

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchingMovies = async () => {
      setLoader(true);
      if (movies?.length !== 0) {
        setLoader(false);
        return movies;
      }
      const { data } = await axios.get(API + "movies");
      setMovies(data);

      setFilter(data);
      setLoader(false);
    };
    fetchingMovies();
  }, [setMovies, setFilter, filtered?.length, movies]);

  const handleFilterByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    filterByName(event.target.value);
  };

  return (
    <div className={wrapper}>
      <div style={{ width: "25.5rem", height: "43.875rem", position: "fixed", boxSizing: "border-box" }}>
        <Box height='100%' width='100%'>
          <div className={title}>Фильтр поиска</div>
          <div className={filter}>
            <div>Название</div>
            <input value={name} placeholder='Введите название' onChange={handleFilterByName} />
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

      {loader ? (
        <Loader />
      ) : (
        <div className={moviesWrapper}>
          {filtered?.map((item) => (
            <FilmCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
});

export default Main;
