import { useCallback, useState } from "react";
import axios from "axios";

import { ArticleType } from "../../../types/api/ArticleType";
import { useToastMessage } from "../../useToastMessage";

export const useGetArticles = () => {
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showMessage } = useToastMessage();

  const getArticles = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<ArticleType>>("http://localhost:3001/api/v1/articles")
      .then((res) => {
        setArticles(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        showMessage({ title: "記事の取得に失敗しました", status: "error" });
      })
      .finally(() => setLoading(false));
  }, []);
  return { getArticles, articles, loading };
};
