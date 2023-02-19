import koa from "koa";
import { enableMethods } from "./router/index.js";
import { DB } from "./db/index.js";


const app = new koa();

app.context.db = DB.getInstance();
app.use(enableMethods)
app.use(ctx=>{ctx.body = ctx.db})

app.listen(3005);
console.log("started on port 3005");