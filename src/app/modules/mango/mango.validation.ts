import { z } from "zod";

export const mangoZodSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  variety: z.string().trim().min(1, { message: "Variety is required" }),
  unit: z.enum(["KG", "TON"]).default("KG"),
  price: z.number().min(0, { message: "Price must be >= 0" }),
  stock: z.number().min(0, { message: "Stock must be >= 0" }),
  origin: z.string().optional().default("Unknown"),
  season: z.enum(["Summer", "Winter"]),
});
