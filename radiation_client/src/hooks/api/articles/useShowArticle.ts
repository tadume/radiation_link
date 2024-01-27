import { useCallback, useState } from "react";
import axios from "axios";

import { ArticleType } from "../../../types/api/ArticleType";
import { useToastMessage } from "../../useToastMessage";

export const useShowArticle = (articleId: string | undefined) => {
  const [article, setArticle] = useState<ArticleType | null>(null);
  const { showMessage } = useToastMessage();
  const getArticle = useCallback(() => {
    axios
      .get<ArticleType>(`http://localhost:3001/api/v1/articles/${articleId}`)
      .then((res) => {
        setArticle(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        showMessage({
          title: "記事が取得できませんでした。",
          status: "error",
        });
        console.log(error);
      });
  }, [setArticle]);

  return { getArticle, article };
};
