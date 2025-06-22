import { model, models, Schema } from "mongoose";
import {
  BookStaticMethods,
  IBook,
  ParamsUpdateBookAvailability,
} from "./book.interface";
import { BOOK_GENRE } from "./constants/book-genre";

const bookSchema = new Schema<IBook, BookStaticMethods>(
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

bookSchema.static(
  "updateBookAvailability",
  async function (values: ParamsUpdateBookAvailability) {
    const { book, remainingBooks, res } = values;

    const newBody = {
      copies: remainingBooks,
      available: remainingBooks === 0 ? false : true,
    };

    await Book.findByIdAndUpdate(book, newBody, {
      new: true,
      runValidators: true,
    }).select("-__v");
  }
);

const Book = model<IBook, BookStaticMethods>("Book", bookSchema);

export default Book;
