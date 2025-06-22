import { Router } from "express";
import { createBook, getBooks } from "./controllers";

const bookRoute = Router();

bookRoute.route("/").post(createBook).get(getBooks);

export default bookRoute;
