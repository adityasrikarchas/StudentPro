// Internal Imports
import { lazy } from 'react';
import JamesAnderson from "../assets/svgs/JamesAnderson.svg";

// Importing Pages
const HomePage = lazy(() => import('../pages/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const AssessmentsPage = lazy(() => import('../pages/Assessments'));
const PremiumPage = lazy(() => import('../pages/Premium'));

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
    path: '/communication',
    element: <AssessmentsPage userName={"James Anderson"} userAvatar={JamesAnderson}/>,
    errorElement: <ErrorPage />
  },
  {
    key: '5',
    path: '/premium-memborship',
    element: <PremiumPage />,
    errorElement: <ErrorPage />
  },
  {
    key: '6',
    path: '*',
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
