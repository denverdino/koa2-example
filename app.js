const koa = require("koa");
const http = require('http');
const app = new koa();

process
  .on('SIGTERM', shutdown('SIGTERM'))
  .on('SIGINT', shutdown('SIGINT'))
  .on('uncaughtException', shutdown('uncaughtException'));

function shutdown(signal) {
  return (err) => {
    console.log(`Receive ${ signal }, exiting ...`);
    if (err) console.error(err.stack || err);
    process.exit(err ? 1 : 0);
  };
}

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

