const koa = require("koa");
const http = require('http');
const app = new koa();

app.use(async (ctx) => {
    ctx.body = "hello world"
});

http
    .createServer(app.callback())
    .listen(3000, () => console.log('listen on port 3000'));