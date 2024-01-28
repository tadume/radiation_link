import { Center, Spinner, Stack } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';
import { ArticlePreviewCard } from '../organisms/card/ArticlePreviewCard';
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
        <Stack spacing={4}>
          {articles.map((data) => (
            <ArticlePreviewCard
              key={data.id}
              name={data.user.name}
              articleId={data.id}
              title={data.title}
              updatedAt={data.updated_at}
            />
          ))}
        </Stack>
      )}
    </>
  );
});
