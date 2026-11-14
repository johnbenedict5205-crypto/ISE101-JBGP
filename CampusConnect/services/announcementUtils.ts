
import type { Announcement } from '../types/announcement';

export function getUnreadAnnouncements(
  items: Announcement[]
): Announcement[] {
  return items.filter(item => !item.read);
}

export function formatStudentName(
  firstName: string,
  lastName: string
): string {
  return `${firstName} ${lastName}`;
}


export function getAnnouncementTitles(
  items: Announcement[]
): string[] {
  return items.map(item => item.title);
}

export function sumNumbers(numbers: number[]): number {
  return numbers.reduce((total, number) => total + number, 0);
}

