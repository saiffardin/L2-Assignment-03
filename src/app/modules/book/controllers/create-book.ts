import { type Request, type Response, type NextFunction } from "express";
import Book from "../book.model";
import { bookValidation } from "../book.validation";

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const zodBody = await bookValidation.parseAsync(req.body);
    const data = await Book.create(zodBody);

    res.send({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
