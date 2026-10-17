import AddBookmarkForm from "@/components/add-bookmark-form";
import { BookmarkCard } from "@/components/bookmark-card";
import { getBookmarks } from "@/lib/data/bookmarks";

export default async function HomePage() {
  const bookmarks = await getBookmarks();
  // if (bookmarks.length === 0) {
  //   return <p>Закладки 200</p>;
  // }
  return (
    <>
      <AddBookmarkForm />

      <ul className="space-y-3">
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
            <BookmarkCard bookmark={bookmark} />
          </li>
        ))}
      </ul>
    </>
  );
}
