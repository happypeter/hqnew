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
// app.listen(3010, () => {
//   console.log('running on port 3010');
// })



  fs.readFile('./news.json', 'utf-8', (err, data) => {
    if (err) throw err
    let arr = JSON.parse(`[${data}]`)
    const file = fs.createWriteStream('array.json');
    file.on('error', function(err) { /* error handling */ })
    arr.forEach(
      function(obj) {
        file.write(JSON.stringify(obj) + ',\n')
      }
    )
    file.end()
  })
