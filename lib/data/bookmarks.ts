import "server-only";
import { isValidObjectId, type Types } from "mongoose";
import { connectDB } from "../db";
import { BookmarkModel, type BookmarkDoc } from "../models/bookmark";
import type { Bookmark } from "../types";

type LeanBookmark = BookmarkDoc & { _id: Types.ObjectId };

function toDTO(doc: LeanBookmark): Bookmark {
  return {
    id: doc._id.toString(),
    url: doc.url,
    title: doc.title,
    tags: doc.tags,
    isRead: doc.isRead,
    createdAt: doc.createdAt,
  };
}
export async function getBookmarks(): Promise<Bookmark[]> {
  await connectDB();

  const docs = await BookmarkModel.find()
    .sort({ createdAt: -1 })
    .lean<LeanBookmark[]>();
  return docs.map(toDTO);
}

export async function getBookmarkById(id: string): Promise<Bookmark | null> {
  if (!isValidObjectId(id)) return null;

  await connectDB();
  const doc = await BookmarkModel.findById(id).lean<LeanBookmark>();

  return doc ? toDTO(doc) : null;
}
export async function createBookmark(input: {
  url: string;
  title: string;
  tags: string[];
}): Promise<string> {
  await connectDB();
  const doc = await BookmarkModel.create(input);

  return doc._id.toString();
}
export async function setBookmarkRead(id: string, isRead: boolean) {
  if (!isValidObjectId(id)) return;

  await connectDB();
  await BookmarkModel.updateOne({ _id: id }, { isRead });
}

export async function deleteBookmark(id: string) {
  if (!isValidObjectId(id)) return;

  await connectDB();
  await BookmarkModel.deleteOne({ _id: id });
}
