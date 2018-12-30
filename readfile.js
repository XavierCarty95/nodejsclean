var fs = require("fs")

fs.readFile('./readMe.txt','utf-8' , function(error,data){
  fs.writeFile('writeMe.txt',data)
    
})

console.log('test')

