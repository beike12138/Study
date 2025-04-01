const express = require("express");
const app = express();

// 创建路由规则
app.get("/home", (req, res) => {
  res.send("hello express");
});

app.get("/request", (req, res) => {
  //原生操作
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);

  // express操作
  console.log(req.path); // /request
  console.log(req.query); //[Object: null prototype] { a: '100', b: '200' }
  res.send("hello / express");
});                  

// 获取路由参数
app.get("/get/:id", (req, res) => {
  console.log(req.params.id); //[Object: null prototype] { id: '100' }
  res.send(`hello /get/${req.params.id} express`);
});

app.post("/response", (req, res) => {
  //设置响应状态
  res.status(200);
  // 设置响应头
  res.set("aaa", "bbb");
  // 设置响应体
  res.send("hello post express");
});

// 其他响应
app.get("/otherResponse", (req, res) => {
  // 重定向
  // res.redirect("http://www.baidu.com");
  // 下载响应
  // res.download(__dirname + './package.json');
  // json响应
  // res.json({
  //     name: 'zs',
  //     age: 18
  // });
  // 文件响应
  res.sendFile(__dirname + "/post.html");
});

app.listen(8080, () => {
  console.log("server is running at http://localhost");
});
