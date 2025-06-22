import { Router } from "express";
import mangoRoute from "../modules/mango/mango.route";
import bookRoute from "../modules/book/book.route";

const routes = Router();

routes.use("/mango", mangoRoute);

routes.use("/api/books", bookRoute);

export default routes;
