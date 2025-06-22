import { Router } from "express";
import {
  createBook,
  deleteBookById,
  getBookById,
  getBooks,
  updateBookById,
} from "./controllers";

const bookRoute = Router();

bookRoute.route("/").post(createBook).get(getBooks);

bookRoute
  .route("/:bookId")
  .get(getBookById)
  .patch(updateBookById)
  .delete(deleteBookById);

export default bookRoute;
