const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// 声明一个中间件
function myMiddleware(req, res, next) {
    // 获取url和id, 保存在access.log中
    const { url, ip } = req;
    fs.appendFileSync(
      path.resolve(__dirname, "access.log"),
      `${url} ${ip} ${Date.now()}\n`
    );
    next();
}

// 使用中间件
app.use(myMiddleware);


app.get("/", (req, res) => {
  res.send("你好 express");
});
app.get("/home", (req, res) => {
  res.send("你好 home express");
});

app.listen(8081, () => {
  console.log("express server running at http://127.0.0.1:8081");
});