import { MovieType } from "@/@types/movie";
import { action, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class Global {
  movies: MovieType[] = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "Store",
      properties: ["movies"],
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
        return {
          ...item,
          count: action === "add" ? ++item.count : --item.count,
        };
      }
      return item;
    });
  });
}

const global = new Global();
export default global;
