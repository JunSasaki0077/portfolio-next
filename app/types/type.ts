export type Post = {
  id: number;
  path: string;
  emoji: string;
  title: string;
  published_at: string;
};

export type SKILL = {
  name: string;
};

export type WORK = {
  id: string;
  title: string;
  image: string;
  url: string;
  skills: string[];
};
