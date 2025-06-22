import { model, models, Schema } from "mongoose";
import { IBook } from "./book.interface";
import { BOOK_GENRE } from "./constants/book-genre";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, trim: true, required: true },
    author: { type: String, trim: true, required: true },
    genre: { type: String, enum: BOOK_GENRE, required: true },
    isbn: { type: String, unique: true, trim: true, required: true },
    description: { type: String },
    copies: {
      type: Number,
      min: 0,
      required: true,
    },
    available: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

const Book = models.Book || model<IBook>("Book", bookSchema);

export default Book;

/*
title (string) — Mandatory. The book’s title.

author (string) — Mandatory. The book’s author.

genre (string) — Mandatory. Must be one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY.

isbn (string) — Mandatory and unique. The book’s International Standard Book Number.

description (string) — Optional. A brief summary or description of the book.

copies (number) — Mandatory. Non-negative integer representing total copies available.

available (boolean) — Defaults to true. Indicates if the book is currently available for borrowing.
*/
