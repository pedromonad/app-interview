const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


let transactions = [];

app.post('/api/transaction', (req, res) => {
  transactions.push(req.body);

  return res.status(200).send({
    status: 'success',
    transaction: req.body
  })
})

app.get('/api/transactions', (req, res) => {
  return res.status(200).send({
    status: 'success',
    transactions
  })
})

app.listen(3000, (err) => {
  if (err) console.error(err);

  console.log('listening on port 3000')
})

