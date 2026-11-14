
export type AnnouncementCategory = 'Academic' | 'Events' | 'Notice';

export interface Announcement {
  id: string;
  title: string;
  category: AnnouncementCategory;
  read: boolean;
}

export function getAnnouncementTitles(
  items: Announcement[]
): string[] {
  return items.map(item => item.title);
}
