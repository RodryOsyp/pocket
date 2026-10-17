import "server-only";
import { z } from "zod";

const envSchema = z.object({
  MONGODB_URI: z.string().startsWith("mongodb"),
});

export const env = envSchema.parse(process.env);
