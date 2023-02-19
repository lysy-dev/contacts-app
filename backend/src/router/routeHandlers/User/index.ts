import { Context, Next } from "koa";
import { RouteProp } from "../../types";

const getUser: RouteProp = {
  method: "GET",
  path: "/user",
  handler: (ctx: Context, next: Next) => {
    const id = ctx.request.query["id"];
    const user =  ctx.db.Contact.get(id);
    if(!user) {
        return ctx.throw(404, `User with id ${id} not found`);
    }
    return next();
  },
};

export const userRoutes = [getUser];