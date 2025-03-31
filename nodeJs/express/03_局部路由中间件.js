// 局部路由中间件代码
const express = require('express');

const app = express();

//声明路由中间件
let check = (req, res, next) => {
    //判断url中是否有code === 123
    if (req.query.code === '123') {
        //如果存在code === 123，则继续执行下一个中间件
        next();
    } else {
        //如果不存在code === 123，则返回错误信息
        res.send('请输入正确的code');
    }
};

app.get('/', check, (req, res) => {
  res.send('hello express');
});
app.get('/home', (req, res) => {
  res.send('你好 home express');
});
app.get('/about', (req, res) => {
  res.send('你好 about express');
});

app.listen(8082, () => {
  console.log("http://127.0.0.1:8082");
});