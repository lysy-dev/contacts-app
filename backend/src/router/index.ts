import { Context, Next } from "koa";

const availableMethods = [ "GET", "POST", "PUT", "DELETE"];

export const enableMethods = (ctx:Context, next:Next)=>{
    console.log(ctx.request.method)
    if(!availableMethods.includes(ctx.request.method)) {
        return ctx.throw(403, "Method not allowed");
    }
    return next();
}