let http = reqiure('http');

http.createServer(function(req, res){
    res.end("Hello");
}).listen(3030);