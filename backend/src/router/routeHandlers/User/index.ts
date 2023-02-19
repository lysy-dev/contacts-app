import { Context, Next } from "koa";
import { RouteProp } from "../../types";

const getUser: RouteProp = {
  method: "GET",
  path: "/user",
  handler: (ctx: Context, next: Next) => {
    const id = ctx.request.query["id"];
    const user =  ctx.db.Contact.get(id);
    console.log(user);
    if(!user) {
        return ctx.throw(404, `User with id ${id} not found`);
    }
    ctx.body = user
    return next();
  },
};

const setUser: RouteProp = {
  method: "PUT",
  path: "/user",
  handler: (ctx: Context, next: Next) => {
    const isBodyGoodType = ctx.is("application/x-www-form-urlencoded");
    console.log(ctx.request.type)
    if(!isBodyGoodType){
        return ctx.throw(400, "Bad request");
    }
    const userRequiredKeys = ["id", "first_name", "last_name", "email"];
    const user = ctx.request.body as Object;
    console.log(user)
    const userHasAllKeys = userRequiredKeys.every((key) => user.hasOwnProperty(key));
    if(!userHasAllKeys){
        return ctx.throw(400, "Bad user object");
    }
    ctx.db.Contact.set(user.id, user);
    ctx.body = true;
    return next();
  },
};

export const userRoutes = [getUser,setUser];