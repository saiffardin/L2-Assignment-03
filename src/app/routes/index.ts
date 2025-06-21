import { Router } from "express";
import mangoRoute from "../modules/mango/mango.route";

const routes = Router();

routes.use("/mango", mangoRoute);

export default routes;
