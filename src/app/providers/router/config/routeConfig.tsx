import { ListenPage } from 'pages/ListenPage';
import { MasterPage } from 'pages/MasterPage';
import { SlavePage } from 'pages/SlavePage';
import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoutes, routerMap } from 'shared/const/router';

export type AppRouteProps = RouteProps;

export const routeConfig = (): Record<
  AppRoutes | 'not_found',
  AppRouteProps
> => {
  return {
    master: {
      path: routerMap.master,
      element: <MasterPage />,
    },
    slave: {
      path: routerMap.slave,
      element: <SlavePage />,
    },
    listen: {
      path: routerMap.listen,
      element: <ListenPage />,
    },
    // last
    not_found: {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  };
};
