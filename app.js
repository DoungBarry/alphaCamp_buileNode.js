// 通常 javascript 前排都是先放 ' 定義變數 '   = Defind virable 

const express = require('express')

const app = express()

// step1. require 告訴應用程式我要什麼?    express

// step2.  將工具包express執行後 , 另存為名為 app 的變數


const port = 3000


// 注意這裡不需要 require ('http')  , 因為 express 已經有嵌入 http 模組 , 以及預設 Default = hostname 

// step 3. 使用定義的app呼叫express 工具包的功能 ：

// app.get - 設定路由
// res.send - 設定伺服器回應的內容
// app.listen - 啟動伺服器去監聽


app.get('/', (req, res) => {
  res.send(`this is my first express Web design `)

})

// get 的引數是 （ 目錄 , 函氏（請求和回憶）

// 現在 Express 的 res.send() 會聰明地根據裡面放的內容，設定適當的內容類型來傳送回應給瀏覽器。 並不需要設定回傳的內容是text 或 Html 





app.listen(port, () => {

  console.log(`Express is runing  on http://localhost :${port}`)

})

// listen 的引數 是  ( 阜號 , 函式  ) 
