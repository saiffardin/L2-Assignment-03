import { type Request, type Response, type NextFunction } from "express";
import Book from "../book.model";

export const updateBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.params.bookId;

    const data = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
      runValidators: true,
    }).select("-__v");

    res.send({
      success: true,
      message: "Book updated successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
