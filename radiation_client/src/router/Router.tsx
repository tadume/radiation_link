import { memo } from "react";
import { Route, Routes } from "react-router-dom";

import { ArticleRoutes } from "./ArticleRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Header } from "../components/organisms/Header";
import { EditHeader } from "../components/organisms/EditHeader";
import { ArticleProvider } from "../providers/ArticleProvider";

export const Router = memo(() => {
  return (
    <ArticleProvider>
      <Routes>
        <Route path="/articles">
          {ArticleRoutes.map((url) => (
            <Route
              key={url.path}
              path={url.path}
              element={
                url.path === "new" ? (
                  <HeaderLayout header={<EditHeader />}>
                    {url.children}
                  </HeaderLayout>
                ) : (
                  <HeaderLayout header={<Header />}>
                    {url.children}
                  </HeaderLayout>
                )
              }
            />
          ))}
        </Route>
        <Route
          path="*"
          element={
            <HeaderLayout header={<Header />}>
              <Page404 />
            </HeaderLayout>
          }
        />
      </Routes>
    </ArticleProvider>
  );
});
