import { Router } from "express";
import {
  createMango,
  deleteMangoById,
  getMangoById,
  getMangos,
  updateMango,
} from "./mango.controllers";

const mangoRoute = Router();

mangoRoute.route("/").post(createMango).get(getMangos);

mangoRoute
  .route("/:mangoId")
  .get(getMangoById)
  .patch(updateMango)
  .delete(deleteMangoById);

export default mangoRoute;
