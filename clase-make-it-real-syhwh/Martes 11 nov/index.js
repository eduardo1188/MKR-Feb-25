// se tienen modulos propios del sistema de node, estan todos en  la documentación.
// yo tambine puedo crear mis modulos ---> funciones que quiero usar y puedo dividirlas en archvios, las exporto y donde yo los necesito las llamo.
//modulo por defecto es fail system
// const { error } = require("console")

// const fs = require("fs")
// const saludo =require("./moduleA")

// fs.readFile("./hello.txt", "utf8", (err,data)=>  { err ? console.log(err): console.log(data)})

// saludo.hi("Pepe")
// saludo.bye()

// const hello = require("./moduleA")

// hello.hi()
// fs.readFile("./hello.txt", "utf8", (err,data)=> { //asi paso por node js el contrenido de un archivo que tengo 
//     if (err) {
//         console.log(err)
//     } 
//         console.log(data)
// })

//--------//


// const http = require("http") 

// http.createServer((request, response)=>{
//     response.writeHead(200, {"content-type" : "textr/html"})
//     response.write("Hello world 2")
//     response.end()
// }) .listen(3000)


// //
// const http = require("http") 

// const handleServer = function(req, res) {
//     response.writeHead(404, {"content-type" : "textr/html"})
//     response.write("No found")
//     response.end()
// }

// const server = http.createServer(handleServer)    

//  .listen(3000, ()=> console.log("server not dound 3000"))


//Json
//


