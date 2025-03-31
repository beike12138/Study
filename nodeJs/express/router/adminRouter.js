const express = require("express");
// 创建路由对象
const router = express.Router();

router.get("/admin", (req, res) => {
  res.send("home router");
});
router.get("/setting", (req, res) => {
  res.send("about router");
});

//暴露路由
module.exports = router;
