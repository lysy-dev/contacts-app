import koa from "koa";
import { enableMethods } from "./router/index.js";
import { DB } from "./db/index.js";
import { handleRoutes } from "./router/routeHandlers/index.js";


const app = new koa();

app.context.db = DB.getInstance();
// DB.getInstance().Contact.set(1, { first_name: "John",last_name: "Doe",email:"jDoe@a.pl" });
app.use(enableMethods)
app.use(handleRoutes)

app.listen(3005);
console.log("started on port 3005");