// Internal Imports
import { lazy } from 'react';

// Importing Pages
const HomePage = lazy(() => import('../pages/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const routes = [
  {
    key: '1',
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    key: '2',
    path: '/login',
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
  {
    key: '3',
    path: '/signup',
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
  {
    key: '4',
    path: '*',
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
