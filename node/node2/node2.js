const fs = require('fs')
const path = require('path')

fs.readFile('index.html', (err, data) => {
    if (err) console.log(err)
    else {
        let result = data.toString()
        let htmlStr = result.replace(/\r\n/g, '')
        fs.writeFile('../index.html', htmlStr, (err) => {
            if (err) console.log(err);
            else console.log('Success');

        })
    }
})
// const str = /^1[0-9]{6,18}/
// console.log(str.test(1829356690));
