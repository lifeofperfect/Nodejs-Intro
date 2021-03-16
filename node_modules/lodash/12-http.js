const http = require('http');

const serve = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.end("Welcome to the homepage")
    }
    if(req.url === '/about'){
        res.end("welcome to the about page")
    }
    res.end(`
        <h1>Oops wrong page</h1>
        <p>return to </p>
        <a href="/">home</a>
        
    `)
});

serve.listen(5000);