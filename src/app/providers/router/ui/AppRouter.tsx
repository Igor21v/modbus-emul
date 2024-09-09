import { Suspense, useCallback } from 'react';
import {
  Route,
  RouteObject,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouteProps, routeConfig } from '../config/routeConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps): RouteObject => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );
    return { path: route.path, element: element };
  }, []);
  const routes = Object.values(routeConfig()).map(renderWithWrapper);
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default AppRouter;
