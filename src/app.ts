import express, { type Application } from "express";

import {
  commonMiddlewares,
  globalErrorHandler,
  routeNotFoundHandler,
} from "./app/middlewares";
import routes from "./app/routes";

const app: Application = express();

app.use(commonMiddlewares);

app.use(routes);

app.use(routeNotFoundHandler); // 404 Not Found handler (must be after all routes)

app.use(globalErrorHandler); // Global Error handler (must be last)

export default app;
