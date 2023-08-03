export const Role: {
  USER: 'USER';
  ADMIN: 'ADMIN';
  EDITOR: 'EDITOR';
};
export type Role = (typeof Role)[keyof typeof Role];

export const CourseStatus: {
  C: 'C';
  E: 'E';
  R: 'R';
};
export type CourseStatus = (typeof CourseStatus)[keyof typeof CourseStatus];

export const ExcoType: {
  CISSA: 'CISSA';
  SRC: 'SRC';
  STAFF: 'STAFF';
};
export type ExcoType = (typeof ExcoType)[keyof typeof ExcoType];

export type Blog = {
  id: string;
  heading: string;
  imageUrl: string;
  slug: string;
  published: boolean;
  draft: boolean;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  author?: User;
};

export type Executive = {
  id: string;
  position: string;
  imageUrl: string;
  description: string;
  type: ExcoType;
  order: number;
  userId: string;
  user?: User;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  role: Role;
  blog?: Blog[];
  executive?: Executive;
};

export type Event = {
  id: string;
  date: Date;
  title: string;
  imageUrl: string;
  price: string;
  link: string;
  venue: string;
};

export type Tag = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export type BlogTag = {
  id: string;
  blogId: string;
  tagId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Department = {
  id: string;
  name: string;
  shortName: string;
  matric: string;
  HOD: string;
  about: string;
};

export type Course = {
  code: string;
  title: string;
  credit: number;
  status: CourseStatus;
  departmentId: string;
};
