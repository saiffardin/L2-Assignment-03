import { type Request, type Response, type NextFunction } from "express";
import { borrowValidation } from "../borrow.validation";
import Borrow from "../borrow.model";
import Book from "../../book/book.model";

export const createBorrowedBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const zodBody = await borrowValidation.parseAsync(req.body);

    const bookId = zodBody.book;
    const quantity = zodBody.quantity;

    const currBook = await checkBookAvailability({
      bookId,
      quantity,
      res,
    });

    const remainingBooks = currBook?.copies! - quantity;

    await Book.updateBookAvailability({
      bookId,
      remainingBooks,
    });

    const borrowedBook = await Borrow.create(zodBody);

    res.status(201).send({
      success: true,
      message: "Book borrowed successfully",
      data: borrowedBook,
    });
  } catch (error) {
    next(error);
  }
};

const checkBookAvailability = async (values: {
  res: Response;
  bookId: string;
  quantity: number;
}) => {
  const { bookId, quantity, res } = values;

  const currBook = await Book.findById(bookId);

  if (!currBook) {
    res.status(404).send({
      success: false,
      message: "Borrowed Book not found.",
      data: null,
    });
  }

  if (currBook && currBook?.copies < quantity) {
    res.status(409).send({
      success: false,
      message: "Not enough copies available.",
      error: {
        requested_quantity: quantity,
        remaining_quantity: currBook?.copies,
      },
    });
  }

  return currBook;
};
