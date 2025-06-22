import { BOOK_GENRE } from "./constants/book-genre";

export type BookGenre = (typeof BOOK_GENRE)[number];

export interface IBook {
  title: string;
  author: string;
  genre: BookGenre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}
