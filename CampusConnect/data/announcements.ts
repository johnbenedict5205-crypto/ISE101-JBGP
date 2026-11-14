
export type AnnouncementItem = {
  id: string;
  title: string;
  category: string;
  read: boolean;
};

export const announcements: AnnouncementItem[] = [
  {
    id: "ANN-001",
    title: "Enrollment Reminder",
    category: "Academic",
    read: false,
  },
  {
    id: "ANN-002",
    title: "Sports Festival Announcement",
    category: "Events",
    read: false,
  },
  {
    id: "ANN-003",
    title: "Campus Clean-up Drive",
    category: "Community",
    read: true,
  },
];
