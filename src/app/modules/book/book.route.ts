import { Router } from "express";
import { createBook } from "./controllers";

const bookRoute = Router();

bookRoute.route("/").post(createBook);

export default bookRoute;
