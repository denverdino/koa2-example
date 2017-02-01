const koa = require("koa");
const http = require('http');
const app = new koa();

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async (ctx) => {
    ctx.body = "hello world"
});

http
    .createServer(app.callback())
    .listen(3000, () => console.log('listen on port 3000'));