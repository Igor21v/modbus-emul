export type AppRoutes = 'master' | 'slave' | 'listen';

export type AppRoutePaths = '/' | '/slave' | '/listen';

export const routerMap: Record<AppRoutes, AppRoutePaths> = {
  master: '/',
  slave: '/slave',
  listen: '/listen',
};
