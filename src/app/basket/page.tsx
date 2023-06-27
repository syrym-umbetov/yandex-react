"use client";
import React from "react";
import styles from "./Basket.module.css";
import global from "@/store/global";
import FilmCard from "@/components/FilmCard/FilmCard";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
  const { basket } = global;
  const { moviesWrapper } = styles;
  return (
    <div className={moviesWrapper}>
      {basket?.map((item) => (
        <FilmCard key={item.id} {...item} isBasket/>
      ))}
    </div>
  );
});

export default Basket;
