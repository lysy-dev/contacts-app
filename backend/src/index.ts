import koa from "koa";
import bodyparser from "koa-bodyparser";
import cors from "@koa/cors";
import { enableMethods } from "./router/index.js";
import { DB } from "./db/index.js";
import { handleRoutes } from "./router/index.js";

const addMiddleware = (app: koa) => {
  app.use(bodyparser());
  app.use(cors());
};
const addConfig = (app: koa) => {
  app.use(enableMethods);
  app.use(handleRoutes);
};

const configureContext = (app: koa) => {
  app.context.db = DB.getInstance();
};

const app = new koa();

DB.getInstance().Contact.set(1, {
  first_name: "John",
  last_name: "Doe",
  email: "jDoe@a.pl",
});

const startAPI = () => {
  configureContext(app);
  addMiddleware(app);
  addConfig(app);
  app.listen(3005);
  console.log("started on port 3005");
};
startAPI();
