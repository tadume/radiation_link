import { ReactNode } from "react";

import { ArticlePreviewScreen } from "../components/pages/ArticlePreviewScreen";
import { ArticleDetailScreen } from "../components/pages/ArticleDetailScreen";
import { Page404 } from "../components/pages/Page404";
import { MDEditor } from "../components/pages/MDEditor";

export const ArticleRoutes: Array<{ path: string; children: ReactNode }> = [
  {
    path: "",
    children: <ArticlePreviewScreen />,
  },
  {
    path: ":id",
    children: <ArticleDetailScreen />,
  },
  {
    path: "new",
    children: <MDEditor />,
  },
  {
    path: "*",
    children: <Page404 />,
  },
];
