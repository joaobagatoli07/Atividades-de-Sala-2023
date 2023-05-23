const express = require('express')
const bodyParser = require('body-parser') 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    if(username === 'admin' && password === 'admin'){
        res.send('Login sucessful')
    }

    else{
        res.send('Login failed')
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

