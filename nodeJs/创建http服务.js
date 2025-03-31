// 导入http模板
const http = require("http");

// 创建http服务对象
const server = http.createServer((request, response) => {
  // 请求报文
  // GET / HTTP/1.1
  // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
  // Accept-Encoding: gzip, deflate, br, zstd
  // Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
  // Cache-Control: max-age=0
  // Connection: keep-alive
  // Host: 127.0.0.1:8080
  // Sec-Fetch-Dest: document
  // Sec-Fetch-Mode: navigate
  // Sec-Fetch-Site: none
  // Sec-Fetch-User: ?1
  // Upgrade-Insecure-Requests: 1
  // User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0
  // sec-ch-ua: "Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"
  // sec-ch-ua-mobile: ?0
  // sec-ch-ua-platform: "Windows"
  // 获取请求方法
  console.log(request.method); // GET
  // 获取请求路径
  console.log(request.url); // /
  // 获取http协议的版本号
  console.log(request.httpVersion);
  //// 获取请求头
  console.log(request.headers);
  //{
  //   host: '127.0.0.1:8080',
  //   connection: 'keep-alive',
  //   'sec-ch-ua-platform': '"Windows"',
  //   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
  //   'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
  //   'sec-ch-ua-mobile': '?0',
  //   accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  //   'sec-fetch-site': 'same-origin',
  //   'sec-fetch-mode': 'no-cors',
  //   'sec-fetch-dest': 'image',
  //   referer: 'http://127.0.0.1:8080/',
  //   'accept-encoding': 'gzip, deflate, br, zstd',
  //   'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6'
  // }

  // 获取路径和查询字符串 http://localhost:8080/search?a=100&b=200
  let urlObj = new URL(request.url, "http://127.0.0.1:8080");
  // 输出路径
  console.log("输出路径: " + urlObj.pathname);
  // 输出查询字符串
  console.log("查询字符串: " + urlObj.searchParams.get("a"));

  // 设置状态码
  response.statusCode = 200;
  //设置响应头
  response.setHeader("Content-Type", "text/html;charset=utf-8");
  // 设置响应体
  response.write("<h1>你好 httpserver</h1>");
  response.end();
});

// 监听端口，启动服务
server.listen(8080, () => {
  console.log("服务已经成功启动！");
});
