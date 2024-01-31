import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useScreenTransition = () => {
  const navigate = useNavigate();

  const onClickArticles = useCallback(() => navigate("/articles"), []);
  const onClickUsers = useCallback(() => navigate("/users"), []);
  const onClickSetting = useCallback(() => navigate("/setting"), []);
  const onClickNew = useCallback(() => navigate("/articles/new"), []);

  return { onClickArticles, onClickUsers, onClickSetting, onClickNew };
};
