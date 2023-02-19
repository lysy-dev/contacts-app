import { Context, Next } from "koa";

const availableMethods = ["GET"];

export const enableMethods = (ctx: Context, next: Next) => {
  if (!availableMethods.includes(ctx.request.method)) {
    return ctx.throw(403, "Method not allowed");
  }
  return next();
};

export const routeHandler = (ctx: Context, next: Next) => {
  return next();
}