const server=require("http")
server.createServer((req,res)=>{
    // res.write("My first server")
    // res.end()
    if(req.url==='/'){
        res.write("This is my first page")
        res.end()
    }
    else
         if(req.url==='/about'){
        res.write("About page")
        res.end()
    }
    else if(req.url==='/contact'){
        res.write("Contact page")
        res.end()
    }
    else{
        res.write("404 page not found")
        res.end()
    }
}).listen(4000,()=>{
    console.log("server is running on port 4000")
})