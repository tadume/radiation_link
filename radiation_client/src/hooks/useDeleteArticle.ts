import axios from "axios";
import { useCallback } from "react";
import { useToastMessage } from "./useToastMessage";
import { useScreenTransition } from "./useScreenTransition";

export const useDeleteArticle = () => {
  const { onClickArticles } = useScreenTransition();
  const { showMessage } = useToastMessage();
  const onDeleteArticle = useCallback((articleId: string | undefined) => {
    axios
      .delete(`http://localhost:3001/api/v1/articles/${articleId}`)
      .then(() => {
        showMessage({ title: "記事を削除しました。", status: "success" });
        onClickArticles();
      })
      .catch((error) => {
        console.log(error);
        showMessage({ title: "記事の削除に失敗しました。", status: "error" });
      });
  }, []);

  return { onDeleteArticle };
};
