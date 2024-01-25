import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ArticleRoutes } from './ArticleRoutes';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router = memo(() => {
  return (
    <Routes>
      {ArticleRoutes.map((url) => (
        <Route key={url.path} path="/articles">
          <Route
            path={url.path}
            element={<HeaderLayout>{url.children}</HeaderLayout>}
          />
        </Route>
      ))}
      <Route
        path="*"
        element={
          <HeaderLayout>
            <Page404 />
          </HeaderLayout>
        }
      />
    </Routes>
  );
});
