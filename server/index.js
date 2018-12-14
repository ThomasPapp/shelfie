require('dotenv').config()
const { json } = require('body-parser')
const massive = require('massive')
const express = require('express')
const controller = require('./controller')
const app = express()

app.use(json())

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set("db", db)
    console.log("Connected to database")
})

app.get('/api/products', controller.getProducts)
app.post('/api/products', controller.addProduct)
app.delete('/api/products/:id', controller.removeProduct)
app.put('/api/products/:id', controller.updateProduct)

app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port ${process.env.SERVER_PORT}...`))