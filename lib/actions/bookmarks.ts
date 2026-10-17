"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";
import {
  createBookmark,
  deleteBookmark,
  setBookmarkRead,
} from "@/lib/data/bookmarks";

import { createBookmarkSchema, type FormState } from "../validation";


export async function createBookmarkAction(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const values = {
    url: String(formData.get("url") ?? ""),
    title: String(formData.get("title") ?? ""),
    tags: String(formData.get("tags") ?? ""),
  };

  const parsed = createBookmarkSchema.safeParse(values);

  if (!parsed.success) {
    return {
      status: "error",
      errors: z.flattenError(parsed.error).fieldErrors,
      values,
    };
  }
    await createBookmark(parsed.data);
  revalidatePath("/");
  return { status: "success" };

}
export async function setReadAction(id: string, isRead: boolean) {
  await setBookmarkRead(id, isRead);
  revalidatePath("/");
  revalidatePath(`/bookmarks/${id}`);
}

export async function deleteBookmarkAction(id: string) {
  await deleteBookmark(id);
  revalidatePath("/");
  redirect("/");
}