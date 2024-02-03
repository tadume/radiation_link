import { Center, Spinner, Stack } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { ArticlePreviewCard } from "../organisms/card/ArticlePreviewCard";
import { useGetArticles } from "../../hooks/api/articles/useGetArticles";
import { useScreenTransition } from "../../hooks/useScreenTransition";

export const ArticlePreviewScreen: FC = memo(() => {
  const { articles, getArticles, loading } = useGetArticles();
  const { onSelectArticle } = useScreenTransition();

  useEffect(() => getArticles, []);

  const onClickArticle = useCallback(
    (articleId: number) => onSelectArticle(articleId),
    [onSelectArticle]
  );

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
              img={"https://source.unsplash.com/random"}
              name={data.user.name}
              articleId={data.id}
              title={data.title}
              updatedAt={data.updated_at}
              onClick={onClickArticle}
            />
          ))}
        </Stack>
      )}
    </>
  );
});
