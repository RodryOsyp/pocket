import { z } from "zod";

export const createBookmarkSchema = z.object({
  url: z.url({
    protocol: /^https?$/,
    error: "Нужен адрес вида https://...",
  }),
  title: z
    .string()
    .trim()
    .min(1, "Введите заголовок")
    .max(200, "Не длиннее 200 символов"),
  tags: z
    .string()
    .transform((value) => [
      ...new Set(
        value
          .split(",")
          .map((tag) => tag.trim().toLowerCase())
          .filter(Boolean),
      ),
    ])
    .pipe(z.array(z.string().max(30)).max(5, "Не больше пяти тегов")),
});
type Field = keyof z.input<typeof createBookmarkSchema>;

export type FieldErrors = Partial<Record<Field, string[]>>;
export type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errors: FieldErrors; values: Record<Field, string> };
