export type Role = 'USER' | 'ADMIN' | 'EDITOR';

export type CourseStatus = 'C' | 'E' | 'R';

export type ExcoType = 'CISSA' | 'SRC' | 'STAFF';

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
  blogTag?: BlogTag[];
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
  tag: Tag;
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
  course?: Course[];
};

export type Course = {
  code: string;
  title: string;
  credit: number;
  status: CourseStatus;
  departmentId: string;
  department?: Department;
};
