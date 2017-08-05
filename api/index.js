const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const cors = require('cors')
app.use(cors())


const fs = require('fs')


app.get('/news', (req, res) => {
  fs.readFile('./news.json', 'utf-8', (err, data) => {
    console.log('aaa')
    if (err) throw err
    console.log('bbb')

    // data = `{"title":"《克隆美团外卖》第1小节《项目搭建》","link":"https://haoqicat.com/meituan/1-setup","date":"2017年6月24日"},
    // {"title":"《克隆美团外卖》第5小节《React Router 实现导航》","link":"https://haoqicat.com/meituan/5-nav","date":"2017年6月28日"},`
    // FIXME: have to remove the trailing comma
    let newData = data.substr(0, data.length -2) // -2 to remove , and \n
    let arry = JSON.parse(`[${newData}]`)
    res.json({
      news: arry
    })
  })
})



app.post('/new', (req, res) => {
  fs.readFile('./array.json', 'utf-8', (err, data) => {
    if (err) throw err
    let arr = JSON.parse(`[${data}]`)
    arr.push(req.body.newEp)
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
})


app.listen(3010, () => {
  console.log('running on port 3010');
})
