import { type RequestHandler } from "express";

export const routeNotFoundHandler: RequestHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: `🔍 Route Not Found: ${req.originalUrl}`,
  });
};
