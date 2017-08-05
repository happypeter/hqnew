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


let arr = [
  {
    title: '《微信小程序之吻》第十五小节《小程序服务器端获取登录态信息》',
    link: 'http://haoqicat.com/weapp/15-secret-key',
    date: '2017年2月12日'
  },
  {
    title: '《Happypeter 的摩登 JS 王国》第十六小节《组件化的设计思维方式》',
    link: 'http://haoqicat.com/happypeter-js-kingdom/23-design',
    date: '2017年2月13日'
  }
]

// let string = arr.join("")
//
// console.log(string)

const file = fs.createWriteStream('array.json');
//
// file.on('error', function(err) { /* error handling */ })
//
arr.forEach(
  function(v) {
    file.write(JSON.stringify(v) + ',\n');
    console.log(JSON.stringify(v))
  }
)
//
// file.end();
