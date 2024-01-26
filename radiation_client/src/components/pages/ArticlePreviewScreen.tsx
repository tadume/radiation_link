import { Center, Spinner, Stack } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';
import { ArticleCard } from '../organisms/card/ArticleCard';
import { useGetArticles } from '../../hooks/api/articles/useGetArticles';

export const ArticlePreviewScreen: FC = memo(() => {
  const { articles, getArticles, loading } = useGetArticles();
  useEffect(() => getArticles, []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Stack pt={5} spacing={4}>
          {articles.map((data) => (
            <ArticleCard
              key={data.id}
              name={data.user.name}
              article_id={data.id}
              title={data.title}
              updated_at={data.updated_at}
            />
          ))}
        </Stack>
      )}
    </>
  );
});
