import { MovieType } from "@/@types/movie";
import { API } from "@/app/variables";
import axios from "axios";

export function filterByText(inputArray: MovieType[], inputText: string) {
  if (inputText === "") return inputArray;
  return inputArray.filter((element) => element.title.toLowerCase().includes(inputText.toLowerCase()));
}
