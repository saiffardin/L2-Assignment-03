import { Router } from "express";
import bookRoute from "../modules/book/book.route";
import borrowRoute from "../modules/borrow/borrow.route";

const routes = Router();

routes.use("/api/books", bookRoute);

routes.use("/api/borrow", borrowRoute);

export default routes;
