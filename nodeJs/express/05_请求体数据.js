const express = require("express"); 
const bodyParser = require("body-parser");

const app = express();

// 解析jason体的中间件
const jsonParser = bodyParser.json();
// 解析urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/login", (req, res) => {
    //返回html页面
  res.sendFile(__dirname + "/post.html");
});

app.post("/login", urlencodedParser, (req, res) => {
  // 获取请求体数据 用户名和密码
  console.log(req.body);
});

app.listen(8082, () => {
  console.log("http://127.0.0.1:8082");
});
