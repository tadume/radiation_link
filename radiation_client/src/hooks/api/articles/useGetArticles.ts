import { useCallback, useState } from "react";
import axios from "axios";

import { ArticleType } from "../../../types/api/ArticleType";

export const useGetArticles = () => {
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const getArticles = useCallback(() => {
    axios
      .get<Array<ArticleType>>("http://localhost:3001/articles")
      .then((res) => setArticles(res.data))
      .catch((error) => console.log(error));
  }, [setArticles]);
  return { getArticles, articles };
};
