export type Bookmark = {
  id: string;
  title: string;
  url: string;
  tags: string[];
  isRead: boolean;
  createdAt: Date;
};

export type Filter = "all" | "unread"