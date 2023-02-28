import { Context, Next } from "koa";
import { RouteProp } from "../../types";

const getUser: RouteProp = {
  method: "GET",
  path: "/user",
  handler: (ctx: Context, next: Next) => {
    const id = ctx.request.query["id"];
    const user = ctx.db.Contact.get(id);
    if (!user) {
      return ctx.throw(404, `User with id ${id} not found`);
    }
    ctx.body = user;
    return next();
  },
};

const getUsers: RouteProp = {
  method: "GET",
  path: "/users",
  handler: (ctx: Context, next: Next) => {
    const id = ctx.request.query["id"];
    const length = ctx.request.query["length"];
    const users = ctx.db.Contact.getMany(length, id);

    if (!users) {
      return ctx.throw(404, `User with id ${id} not found`);
    }
    ctx.body = users;
    return next();
  },
};

const setUser: RouteProp = {
  method: "PUT",
  path: "/user",
  handler: (ctx: Context, next: Next) => {
    const isBodyGoodType = ctx.is("application/json");
    if (!isBodyGoodType) {
      return ctx.throw(400, "Bad request");
    }
    const userRequiredKeys = ["first_name", "last_name", "email"];
    const user = ctx.request.body as Object;

    const userHasAllKeys = userRequiredKeys.every((key) =>
      user.hasOwnProperty(key)
    );
    if (!userHasAllKeys) {
      return ctx.throw(400, "Bad user object");
    }
    ctx.db.Contact.set(user);
    ctx.body = true;
    return next();
  },
};

const removeUser: RouteProp = {
  method: "DELETE",
  path: "/user",
  handler: (ctx: Context, next: Next) => {
    const isBodyGoodType = ctx.is("application/json");
    if (!isBodyGoodType) {
      return ctx.throw(400, "Bad request");
    }

    const user = ctx.request.body as { id: number };
    if (typeof user.id !== "number") {
      return ctx.throw(400, "Bad user id");
    }
    try {
      ctx.db.Contact.delete(user.id);
    } catch (_) {
      return ctx.throw(404, "User not found");
    }
    ctx.body = true;
    return next();
  },
};

export const userRoutes = [getUser, setUser, getUsers, removeUser];
