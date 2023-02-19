import koa from "koa";
import { enableMethods } from "./router/index.js";
// import { DB } from "./db";

// const router = new Router();
// router.get("/test", async (ctx) => {
//   const { db } = ctx;

//   const user = db.user.get("1");
//   ctx.body = user;
// });

const app = new koa();

app.use(enableMethods)
app.use(ctx=>{ctx.body = ctx})
// app.context.db = DB.getInstance();
app.listen(3005);
console.log("started on port 3005");