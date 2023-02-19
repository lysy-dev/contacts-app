import { Context, Next } from "koa";
import { routeHandlersObject } from "./routeHandlers/index.js";

export const handleRoutes = (ctx: Context, next: Next) => {
  const { method, path } = ctx.request;
  const route = routeHandlersObject[method][path];
  if (!route) {
    return ctx.throw(404, `Route not found for ${method} ${path}`);
  }
  route(ctx, next);
};
