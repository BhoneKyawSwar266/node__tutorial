const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcom to home page')
    }
    if(req.url === '/about'){
        res.end('This is about page')
    }
    res.end(`
    <h1>Opps!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back home</a>
    `)
})

server.listen(200)