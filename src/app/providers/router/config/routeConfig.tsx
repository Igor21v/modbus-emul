import { RouteProps } from 'react-router-dom';
import { AppRoutes } from 'shared/const/router';
import { routerMap } from 'shared/const/router';
import { MasterPage } from 'pages/MasterPage';
import { SlavePage } from 'pages/SlavePage';
import { ListenPage } from 'pages/ListenPage';

export type AppRouteProps = RouteProps;

export const routeConfig = (): Record<AppRoutes, AppRouteProps> => {
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
      element: <MasterPage />,
    },
  };
};
