import axios from "axios";
import { useCallback, useContext } from "react";
import { ArticleType } from "../../../types/api/ArticleType";
import { useToastMessage } from "../../useToastMessage";
import { ArticleContext } from "../../../providers/ArticleProvider";
import { useScreenTransition } from "../../useScreenTransition";

export const useNewArticle = () => {
  const { onClickArticles } = useScreenTransition();

  const { title, body, setTitle, setBody } = useContext(ArticleContext);
  const { showMessage } = useToastMessage();

  const onCreateArticle = useCallback(() => {
    axios
      .post<ArticleType>("http://localhost:3001/api/v1/articles", {
        title: title,
        body: body,
      })
      .then((res) => {
        console.log(res); // レスポンスデータを利用するかは考え中
        showMessage({ title: "記事が投稿されました！", status: "success" });
        onClickArticles();
      })
      .catch((error) => {
        console.log(error);
        showMessage({ title: "記事を登録できませんでした。", status: "error" });
      })
      .finally(() => {
        setTitle("");
        setBody("");
      });
  }, [title, body]);

  return { onCreateArticle };
};
