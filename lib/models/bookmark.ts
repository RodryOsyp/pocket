import "server-only";
import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const bookmarkSchema = new Schema(
  {
    url: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);
export type BookmarkDoc = InferSchemaType<typeof bookmarkSchema>;

export const BookmarkModel =
  (mongoose.models.Bookmark as Model<BookmarkDoc> | undefined) ??
  mongoose.model<BookmarkDoc>("Bookmark", bookmarkSchema);
