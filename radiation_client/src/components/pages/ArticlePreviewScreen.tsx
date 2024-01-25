import { Stack } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';
import { ArticleCard } from '../organisms/card/ArticleCard';
import { useGetArticles } from '../../hooks/api/articles/useGetArticles';

export const ArticlePreviewScreen: FC = memo(() => {
  const { articles, getArticles } = useGetArticles();
  useEffect(() => getArticles, []);
  console.log(articles);
  const date = new Date(2022, 5 - 1, 5, 6, 35, 20, 333);
  const samples = [
    {
      id: 1,
      user: {
        name: 'ユーザ2',
      },
      title: 'タイトル1',
      updated_at: date,
    },
    {
      id: 2,
      user: {
        name: 'ユーザ3',
      },
      title: 'タイトル2',
      updated_at: date,
    },
    {
      id: 3,
      user: {
        name: 'ユーザ4',
      },
      title: 'タイトル3',
      updated_at: date,
    },
    {
      id: 4,
      user: {
        name: 'ユーザ1',
      },
      title: 'タイトル4',
      updated_at: date,
    },
  ];
  return (
    <Stack pt={5} spacing={4}>
      {samples.map((data) => (
        <ArticleCard
          key={data.id}
          name={data.user.name}
          article_id={data.id}
          title={data.title}
          updated_at={data.updated_at}
        />
      ))}
    </Stack>
  );
});
