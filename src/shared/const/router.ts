export type AppRoutes = 'master' | 'slave' | 'listen' | 'not_found';

export const routerMap: Record<AppRoutes, string> = {
  master: '/',
  slave: '/slave',
  listen: '/listen',
  not_found: '/',
};
