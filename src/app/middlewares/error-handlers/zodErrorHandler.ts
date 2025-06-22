import { ZodError } from "zod";
import { type ErrorRequestHandler } from "express";

export const zodErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
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

    res.status(400).json({
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
