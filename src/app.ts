import express, {
  type Request,
  type Application,
  type Response,
} from "express";

import {
  commonMiddlewares,
  globalErrorHandler,
  routeNotFoundHandler,
} from "./middlewares";

const app: Application = express();

app.use(commonMiddlewares);

// Initial Route
app.get("/", (req: Request, res: Response) => {
  // throw new Error("Server is Crashed 😵‍💫");

  res.send({ success: true, message: `Sever is Live ⚡` });
});

// 404 Not Found handler (must be after all routes)
app.use(routeNotFoundHandler);

// Global Error handler (must be last)
app.use(globalErrorHandler);

export default app;
