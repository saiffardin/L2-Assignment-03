import { Router } from "express";
import { createBorrowedBook } from "./controllers";

const borrowRoute = Router();

borrowRoute.route("/").post(createBorrowedBook);

export default borrowRoute;
