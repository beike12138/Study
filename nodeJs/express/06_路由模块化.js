const express = require("express");
const app = express();

//引入路由模块
const adminRouter = require("./router/adminRouter");
const userRouter = require("./router/homeRouter");

app.use(adminRouter);
app.use(userRouter);

app.listen(8083, () => {
  console.log("server running at http://127.0.0.1:8083");
});
