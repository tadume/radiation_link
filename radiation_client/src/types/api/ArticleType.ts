export type ArticleType = {
  id: number;
  title: string;
  body: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
  };
};
