import express, {
  type Request,
  type Application,
  type Response,
} from "express";

import cors from "cors";

const app: Application = express();

const middleware = [
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
];
app.use(middleware);

// Initial Route
app.get("/", (req: Request, res: Response) => {
  // throw new Error("Server is Crashed 😵‍💫");

  res.send({ success: true, message: `Sever is Live ⚡` });
});

export default app;
