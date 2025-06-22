import { Router } from "express";
import { borrowedBookSummary, createBorrowedBook } from "./controllers";

const borrowRoute = Router();

borrowRoute.route("/").post(createBorrowedBook).get(borrowedBookSummary);

export default borrowRoute;
