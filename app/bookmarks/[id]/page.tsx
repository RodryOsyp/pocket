import { notFound } from "next/navigation";
import { bookmarks } from "@/lib/mock";

export default async function BookmarkPage({
  params,
}: PageProps<"/bookmarks/[id]">) {
  const { id } = await params;
  const bookmark = bookmarks.find((b) => b.id === id);

  if (!bookmark) notFound();

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">{bookmark.title}</h1>

      <a href={bookmark.url} target="_blank" className="underline">
        {bookmark.url}
      </a>

      <p className="text-sm opacity-60">
        Added {bookmark.createdAt.toLocaleDateString("ru-RU")}
      </p>
    </div>
  );
}
