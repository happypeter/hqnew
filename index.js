// const express = require('express')
// const app = express()

const fs = require('fs')
// app.get('/json', (req, res) => {
//   fs.readFile('./news.json', 'utf-8', (err, data) => {
//     if (err) throw err
//     let arry = JSON.parse(`[${data}]`)
//     let oo = arry.slice(100, 120)
//     console.log(arr)
//   })
// })
//


  //  app.post('/add', (req, res) => {
      fs.readFile('./array.json', 'utf-8', (err, data) => {
        if (err) throw err
        let arr = JSON.parse(`[${data}]`)
        arr.push({
          title: "test",
          link: "test"
        })
        const file = fs.createWriteStream('array.json');
        // 似乎不用全部读出文件内容，然后操作，
        // 有没有 file.append 此类的操作呢？FIXME
        file.on('error', function(err) { console.log(err) })
        arr.forEach(
          function(obj) {
            file.write(JSON.stringify(obj) + ',\n')
          }
        )
        file.end()
      })
  //  })


// app.listen(3010, () => {
//   console.log('running on port 3010');
// })
