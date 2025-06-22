import { type Request, type Response, type NextFunction } from "express";
import Book from "../book.model";

export const deleteBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.params.bookId;

    const data = await Book.findByIdAndDelete(bookId);

    res.send({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
