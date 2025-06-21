import { type ErrorRequestHandler } from "express";
import config from "../../config";
import { ZodError } from "zod";

export const zodErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  if (err instanceof ZodError) {
    let tempErr = {};

    err?.issues.forEach((issue) => {
      tempErr = {
        ...tempErr,
        [issue?.path?.[0]]: {
          ...issue,
          name: err?.name,
          path: issue?.path?.[0],
        },
      };
    });

    res.status(statusCode).json({
      success: false,
      message: "Validation failed",

      error: {
        name: "ValidationError",
        errors: tempErr,
      },
    });
  }

  next(err);
};
