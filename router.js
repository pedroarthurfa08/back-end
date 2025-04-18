const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/ola_form',(req, res) => {
    res.render('ola_form')
})

router.post('/ola', (req, res) => {
    const nome = req.body.nome
    res.render('ola_resposta', {nome: nome})
})

router.get('/soma_form', (req, res) => {
  res.render('soma_form')
})

router.post("/soma", (req, res) => {
  const n1 = Number(req.body.numero1)
  const n2 = Number(req.body.numero2)
  const soma = n1 + n2

  res.render('soma_resposta',{soma: soma})
})

module.exports = router