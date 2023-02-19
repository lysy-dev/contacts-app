import { userRoutes } from "./User/user.js";

const allRoutes = [...userRoutes];

export const routeHandlersObject = allRoutes.reduce((acc, route) => {
  acc[route.method] = {
    [route.path]: route.handler,
  };
  return acc;
}, {} as Record<string, Record<string, any>>);


