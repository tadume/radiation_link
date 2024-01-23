import { ReactNode } from 'react';

import { ArticlePreviewScreen } from '../components/pages/ArticlePreviewScreen';
import { ArticleDetailScreen } from '../components/pages/ArticleDetailScreen';
import { ArticleEditScreen } from '../components/pages/ArticleEditScreen';
import { Page404 } from '../components/pages/Page404';

export const ArticleRoutes: Array<{ path: string; children: ReactNode }> = [
  {
    path: '',
    children: <ArticlePreviewScreen />,
  },
  {
    path: ':id',
    children: <ArticleDetailScreen />,
  },
  {
    path: 'edit',
    children: <ArticleEditScreen />,
  },
  {
    path: '*',
    children: <Page404 />,
  },
];
