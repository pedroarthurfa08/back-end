const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))

app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ola_form',(req, res) => {
    res.render('ola_form')
})

app.post('/ola', (req, res) => {
    const nome = req.body.nome
    res.render('ola_resposta', {nome: nome})
})

app.post('/soma_form', (req, res) =>{
  res.render('soma_form')
})

app.post("/soma", (req, res) => {
  const n1 = Number(req.body.numero1)
  const n2 = Number(req.body.numero2)
  const soma = n1 + n2

  res.render('soma_resposta',{soma: soma})
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})