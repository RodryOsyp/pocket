import Link from "next/link";
import type { Bookmark } from "@/lib/types";
import CopyButton from "./copy-button";

export function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-[#131318]/80 p-5 shadow-lg shadow-black/10 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7c5cff]/50 hover:bg-[#17171e] hover:shadow-[#7c5cff]/10">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <Link
            href={`/bookmarks/${bookmark.id}`}
            className="block text-lg font-semibold tracking-tight text-white group-hover:text-[#9278ff]"
          >
            {bookmark.title}
          </Link>
          <p className="mt-2 truncate text-sm text-white/40">{bookmark.url}</p>
        </div>
        <CopyButton text={bookmark.url} />

        <Link
          href={`/bookmarks/${bookmark.id}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition group-hover:border-[#7c5cff]/40 group-hover:bg-[#7c5cff]/10 group-hover:text-[#9278ff]"
          aria-label={`Открыть ${bookmark.title}`}
        >
          →
        </Link>
      </div>
      {bookmark.tags?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {bookmark.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#7c5cff]/20 bg-[#7c5cff]/10 px-2.5 py-1 text-xs font-medium text-[#b6a7ff]"
            >
              #{tag}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
