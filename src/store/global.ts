"use client";
import { MovieType } from "@/@types/movie";
import { action, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class Global {
  movies: MovieType[] = [];
  basket: MovieType[] = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "Store",
      properties: ["movies", "basket"],
      storage: window.localStorage,
    });
  }

  setMovies = action((movies: MovieType[]) => {
    this.movies = movies?.map((item) => ({
      ...item,
      count: 0,
    }));
  });

  setQuantity = action((id: string, action: "add" | "substract") => {
    this.movies = this.movies?.map((item) => {
      if (id === item.id) {
        if (action === "add" && item.count === 30) {
          return item;
        }
        if (action === "substract" && item.count === 0) {
          return item;
        }
        return {
          ...item,
          count: action === "add" ? ++item.count : --item.count,
        };
      }
      return item;
    });

    this.basket = this.movies?.filter((item) => item.count);
  });

  removeFromBasket = action((id: string) => {
    this.basket = this.basket?.filter((item) => item.id !== id);
    this.movies = this.movies?.map((item) => {
      if (item.id === id) {
        return { ...item, count: 0 };
      }
      return item;
    });
  });
}

const global = new Global();
export default global;
