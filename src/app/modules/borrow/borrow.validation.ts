import { Types } from "mongoose";
import { z } from "zod";

export const borrowValidation = z.object({
  book: z
    .string({
      required_error: "Book ID is required",
      invalid_type_error: "Book ID must be a string",
    })
    .refine(
      (val) => Types.ObjectId.isValid(val),
      "Book ID must be a valid ObjectId"
    ),

  quantity: z
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a number",
    })
    .int("Quantity must be an integer")
    .min(1, "Quantity must be at least 1"),

  dueDate: z.coerce
    .date({
      required_error: "Due date is required",
      invalid_type_error: "Due date must be a valid date",
    })
    .min(new Date(), "Due date cannot be in the past"),
});
