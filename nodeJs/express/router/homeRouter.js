const express = require("express");
// 创建路由对象
const router = express.Router();

router.get("/home", (req, res) => {
  res.send("home router");
});
router.get("/about", (req, res) => {
  res.send("about router");
});

//暴露路由
module.exports = router;
