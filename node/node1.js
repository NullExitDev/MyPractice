//Node.js 文件写入与读取
let str = 'Hello Node,js!!!'
const fs = require('fs')
fs.writeFile('./test.txt', str, (err) => {
    if (err) console.log(err)
    else console.log("Success")

})
fs.readFile('./test.txt', (err, data) => {
    if (err) console.log(err)
    else console.log(data.toString())
})