import { type Request, type Response, type NextFunction } from "express";
import Book from "../book.model";
import { SORT } from "../constants/book-genre";
import { type SortOrder } from "mongoose";

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { query } = req;

    const {
      filter,
      sortBy = "createdAt",
      sort = SORT.ASC,
      limit = "10",
    } = query;

    const searchParams = filter ? { genre: filter } : {};

    const sortParam: { [x: string]: SortOrder } = {
      [sortBy as string]: sort === SORT.DESC ? -1 : 1,
    };

    const limitParam = parseInt(limit.toString());

    const data = await Book.find(searchParams)
      .sort(sortParam)
      .limit(limitParam)
      .select("-__v");

    res.send({
      success: true,
      message: "Books retrieved successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
