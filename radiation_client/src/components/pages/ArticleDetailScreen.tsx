import { FC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HStack } from "@chakra-ui/react";

import { useShowArticle } from "../../hooks/api/articles/useShowArticle";
import { Page404 } from "./Page404";
import { ArticleDetailCard } from "../organisms/card/ArticleDetailCard";
import { SideMenuIcons } from "../molecules/SideMenuIcons";
import { SideMenuContents } from "../molecules/SideMenuContents";
import { FooterIcons } from "../organisms/FooterIcons";

export const ArticleDetailScreen: FC = memo(() => {
  const { id } = useParams();
  const { article, getArticle } = useShowArticle();

  const selectArticle = () => getArticle(id);

  useEffect(() => selectArticle, []);

  const tags = ["React", "Ruby"]; // タグの未実装なので、ダミーで対応
  const numOfGoods = 12; // いいね数の未実装なのでダミーで対応
  const numOfSaves = 5; // いいね数の未実装なのでダミーで対応

  const now = new Date();
  const articleTime = new Date(article.updated_at);
  // const articleTime = new Date('2020/1/28'); // 更新日時警告文を表示するためのダミーデータ
  const diffTime: number = now.getTime() - articleTime.getTime();
  let timeStr: string | null = null;
  if (diffTime / 31536000000 >= 1) {
    timeStr = `${Math.floor(diffTime / 31536000000)}年`;
  } else if (diffTime > 15552000000) {
    timeStr = "半年";
  }

  return (
    <>
      {article.id ? (
        <>
          <HStack
            spacing={{ base: 5, md: 14 }}
            pt="16px"
            px="24px"
            justifyContent="center"
            align="top"
          >
            <SideMenuIcons
              numOfGoods={numOfGoods}
              numOfSaves={numOfSaves}
              articleId={id}
            />
            <ArticleDetailCard
              timeStr={timeStr}
              tags={tags}
              article={article}
            />
            <SideMenuContents />
          </HStack>

          <FooterIcons numOfGoods={numOfGoods} numOfSaves={numOfSaves} />
        </>
      ) : (
        <Page404 />
      )}
    </>
  );
});
