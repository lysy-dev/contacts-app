import koa from 'koa';

const app = new koa();
app.use(async ctx => {
    ctx.body = 'Hello Worlds';
  });
app.listen(3005);