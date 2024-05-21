import { routes } from "~shared/config/routes";

export const PROTECTED_ROUTES = [
  routes.dashboardRoute(),
  routes.messagesRoute(),
  routes.orgRoute(),
];

export const routeIsProtected = (
  currentRoute: string,
  protectedRoutes: string[] = PROTECTED_ROUTES,
) => protectedRoutes.includes(currentRoute);
