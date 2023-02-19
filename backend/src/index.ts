import koa from "koa";
import bodyparser from "koa-bodyparser";
import cors from "@koa/cors";
import { DB } from "./db/index.js";
import { handleRoutes } from "./router/router.js";

const addMiddleware = (app: koa) => {
  app.use(bodyparser());
  app.use(cors({ origin: "*", allowMethods: ["GET", "PUT"]}));
};
const addConfig = (app: koa) => {
  app.use(handleRoutes);
};

const configureContext = (app: koa) => {
  app.context.db = DB.getInstance();
};

const app = new koa();


const startAPI = () => {
  configureContext(app);
  addMiddleware(app);
  addConfig(app);
  app.listen(3005);
  console.log("started on port 3005");
};
startAPI();
