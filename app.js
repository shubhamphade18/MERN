const http = require('http');
const server = http.createServer((req, res)=>{
  console.log(req.url,req.headers,req.method);
  if (req.url === '/mom'){
    res.write("Mummy");
  }
  res.end();
});

server.listen(3000,()=>{
  console.log("listen on http://www.localhost:3000");
});