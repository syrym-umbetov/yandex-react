"use client";
import { MovieType } from "@/@types/movie";
import { action, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class Global {
  movies: MovieType[] = [];
  filtered: MovieType[] = [];
  basket: MovieType[] = [];
  name: string = "";

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "Store",
      properties: ["movies", "basket", "filtered", "name"],
      storage: window.sessionStorage,
    });
  }

  setMovies = action((movies: MovieType[]) => {
    this.movies = movies?.map((item) => ({
      ...item,
      count: 0,
    }));
  });

  setFilter = action((movies: MovieType[]) => {
    this.filtered = movies?.map((item) => ({
      ...item,
      count: 0,
    }));
  });

  setName = action((name: string) => {
    this.name = name;
  });

  setQuantity = action((id: string, action: "add" | "substract") => {
    this.filtered = this.movies?.map((item) => {
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

    this.basket = this.filtered?.filter((item) => item.count);
  });

  filterByName = action((input: string) => {
    this.filtered = this.movies.filter((element) => element.title.toLowerCase().includes(input.toLowerCase()));
  });

  removeFromBasket = action((id: string) => {
    this.basket = this.basket?.filter((item) => item.id !== id);
    this.movies = this.filtered?.map((item) => {
      if (item.id === id) {
        return { ...item, count: 0 };
      }
      return item;
    });
  });
}

const global = new Global();
export default global;
