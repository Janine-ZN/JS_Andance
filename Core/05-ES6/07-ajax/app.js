const http=require("http");
http.createServer((req,res)=>{
  res.writeHead(200,{
    "Content-Type":"text/plain;charset=utf-8",
    "Access-Control-Allow-Origin":"*" // 解决跨域
  })
  if(req.url.endsWith("liang"))
    setTimeout(function(){
      res.write("亮到达终点！")
      res.end();
    },6000)
  else if(req.url.endsWith("yaner"))
    setTimeout(function(){
      res.write("燕儿到达终点！")
      res.end();
    },4000)
  else
    setTimeout(function(){
      res.write("东到达终点！")
      res.end();
    },2000)
    
}).listen(1314)
//测试: 
//在终端: node app.js
//在浏览器: http://localhost:8000/liang
//                               yaner
//                               dong