import { Context, Next } from "koa";
import { userRoutes } from "./User/index.js";

const allRoutes = [...userRoutes];

const routerObject = allRoutes.reduce((acc, route) => {
  acc[route.method] = {
    [route.path]: route.handler,
  };
  return acc;
}, {} as Record<string, Record<string, any>>);

export const handleRoutes = (ctx: Context, next: Next) => {
  const { method, path } = ctx.request;
  const route = routerObject[method][path];
  if (!route) {
    return ctx.throw(404, `Route not found for ${method} ${path}`);
  }
  route(ctx, next);
//   return next();
};
