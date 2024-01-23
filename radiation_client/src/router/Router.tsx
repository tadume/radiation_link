import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ArticleRoutes } from './ArticleRoutes';
import { Page404 } from '../components/pages/Page404';

export const Router = memo(() => {
  return (
    <Routes>
      {ArticleRoutes.map((url) => (
        <Route path="/articles">
          <Route path={url.path} element={url.children} />
        </Route>
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
