import { z } from "zod";
import { BOOK_GENRE } from "./constants/book-genre";

export const bookValidation = z.object({
  title: z
    .string({
      required_error: "Title is required.",
      invalid_type_error: "Title must be a string.",
    })
    .trim()
    .min(1, { message: "Invalid title. Only white-space is not allowed." }),

  author: z
    .string({
      required_error: "Author is required.",
      invalid_type_error: "Author must be a string.",
    })
    .trim()
    .min(1, { message: "Invalid author. Only white-space is not allowed." }),

  genre: z.enum(BOOK_GENRE, {
    required_error: "Book genre is required.",
    invalid_type_error: "Book genre must be a string.",
  }),

  isbn: z
    .string({
      required_error: "ISBN is required.",
      invalid_type_error: "ISBN must be a string.",
    })
    .trim()
    .min(1, { message: "Invalid ISBN. Only white-space is not allowed." }),

  description: z.string().optional(),

  copies: z
    .number({
      required_error: "Copies is required.",
      invalid_type_error: "Copies must be a number.",
    })
    .int({ message: "Copies must be an integer." })
    .min(0, { message: "Copies must be a non-negative number." }),

  available: z.boolean().optional().default(true),
});
