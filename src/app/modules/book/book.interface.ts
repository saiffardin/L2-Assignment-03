import { Model } from "mongoose";
import { BOOK_GENRE } from "./constants/book-genre";
import { type Response } from "express";

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

export interface ParamsUpdateBookAvailability {
  bookId: string;
  remainingBooks: number;
}

export interface BookStaticMethods extends Model<IBook> {
  updateBookAvailability(values: ParamsUpdateBookAvailability): Promise<void>;
}
