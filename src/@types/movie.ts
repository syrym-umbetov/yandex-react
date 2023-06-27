export type CinemasType = {
  id: string;
  name: string;
  movieIds: string[];
};

export type MovieType = {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
};

export type ReviewType = {
  id: string;
  name: string;
  rating: number;
  text: string;
};
