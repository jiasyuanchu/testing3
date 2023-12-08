//建構應用程式伺服器
//引用 Express 與 Express 路由器
const Express = require('express')
const app = Express()

const port = 3000

//引用路由模組
app.get('/', (req, res) => {
  res.send("hello world!")
})
//設定 port 3000
//啟動伺服器並監聽
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
