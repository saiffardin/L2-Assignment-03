import config from "../config";
import { type ErrorRequestHandler } from "express";

export const globalErrorHandler: ErrorRequestHandler = (err, _, res) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    stack: config.NODE_ENV === "development" ? err.stack : undefined,
  });
};
