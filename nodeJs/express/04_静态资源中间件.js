const express = require("express");

const app = express();

// 静态资源中间件设置
app.use(express.static(__dirname + "./public"));


app.get("/", check, (req, res) => {
  res.send("hello express");
});

app.listen(8082, () => {
  console.log("http://127.0.0.1:8082");
});
