const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>
{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>my first page</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></body>');
        res.write('</html>');
       return  res.end();
    }
    if(url==='/message' && method === 'POST')
    {
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode=302;
        res.setHeader('location','/');
        return res.end();
    }
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title><head>');
    res.write('<body><h1>hello world</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);