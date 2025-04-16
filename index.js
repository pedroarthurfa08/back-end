const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))

app.set('views', 'views')

app.set('view engine', 'ejs')

app.post('/ola', (req, res) => {
    const nome = req.body.nome
    res.send(`Olá ${nome}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})