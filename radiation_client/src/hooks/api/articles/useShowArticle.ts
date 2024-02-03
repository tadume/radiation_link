import { useCallback, useState } from "react";
import axios from "axios";

import { ArticleType } from "../../../types/api/ArticleType";
import { useToastMessage } from "../../useToastMessage";

export const useShowArticle = () => {
  const [article, setArticle] = useState<ArticleType>({} as ArticleType);
  const { showMessage } = useToastMessage();

  const getArticle = useCallback((articleId: string | undefined) => {
    axios
      .get<ArticleType>(`http://localhost:3001/api/v1/articles/${articleId}`)
      .then((res) => {
        setArticle(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        showMessage({
          title: "記事が取得できませんでした。",
          status: "error",
        });
      });
  }, []);

  return { getArticle, article };
};
