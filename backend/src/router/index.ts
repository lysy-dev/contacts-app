import { Context, Next } from "koa";
import { routeHandlersObject } from "./routeHandlers/index.js";

const availableMethods = ["GET", "PUT"];

export const enableMethods = (ctx: Context, next: Next) => {
  if (!availableMethods.includes(ctx.request.method)) {
    return ctx.throw(403, "Method not allowed");
  }
  return next();
};

export const handleRoutes = (ctx: Context, next: Next) => {
  const { method, path } = ctx.request;
  const route = routeHandlersObject[method][path];
  if (!route) {
    return ctx.throw(404, `Route not found for ${method} ${path}`);
  }
  route(ctx, next);
};
