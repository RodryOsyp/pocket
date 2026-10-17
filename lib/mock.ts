import type { Bookmark } from './types';

export const bookmarks: Bookmark[] = [
    {
        id: "1",
        title: "nextjs,Docs",
        url: "https://nestjs.org/docs",
        tags: ["next"],
        isRead: false,
        createdAt: new Date("2026-09-01")
    },
    {
        id: "2",
        title: "nextjs,Docs",
        url: "https://tailwindcss.com/docs/installation/using-vite",
        tags: ["tailwind"],
        isRead: false,
        createdAt: new Date("2026-09-01")
    }
]
