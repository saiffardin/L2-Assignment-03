import { type Request, type Response, type NextFunction } from "express";
import Book from "../book.model";

export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.params.bookId;
    const data = await Book.findById(bookId).select("-__v");

    res.send({
      success: true,
      message: "Book retrieved successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
