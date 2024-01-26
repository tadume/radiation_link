export type ArticleType = {
  id: number;
  title: string;
  body: string;
  updated_at: Date;
  user: {
    id: number;
    name: string;
  };
};
