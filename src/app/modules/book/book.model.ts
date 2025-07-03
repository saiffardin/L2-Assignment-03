import { model, Schema } from "mongoose";
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

bookSchema.post("findOne", function (doc, next) {
  console.log(doc);
  next();
});

bookSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate() as IBook;

  if (update && typeof update.copies === "number") {
    update.available = update.copies > 0;
    this.setUpdate(update); // update the update object
  }

  next();
});

bookSchema.static(
  "updateBookAvailability",
  async function (values: ParamsUpdateBookAvailability) {
    const { bookId, remainingBooks } = values;

    const newBody = {
      copies: remainingBooks,
      available: remainingBooks === 0 ? false : true,
    };

    await Book.findByIdAndUpdate(bookId, newBody, {
      new: true,
      runValidators: true,
    }).select("-__v");
  }
);

const Book = model<IBook, BookStaticMethods>("Book", bookSchema);

export default Book;
