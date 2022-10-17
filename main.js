const http=require('http');
const server=http.createServer((req,res)=>
{
    const url=req.url;
    if(url === '/home')
    {
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>my first page</title><head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url ==='/about')
    {
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>my first page</title><head>');
        res.write('<body><h1>welecom to about us page</h1></body>');
        res.write('</html>');
        return res.end()
    }
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title><head>');
    res.write('<body><h1>welecome to my node js project</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);