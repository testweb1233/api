const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const hwid = [
    '58E3A4DC-2D51-7E49-AB5A-7FCF951A7521',
    'b'
]

app.get('/', (req, res) => {
    res.send({ message: 'API ON'})
})

app.get('/check', async (req, res) => {
    if(!req.query.hwid) {
        return res.send({ message: 'Invalide HWID', status: 404 })
    }
    if(!hwid.includes(req.query.hwid)) {
        res.send({ message: 'HWID non autorisé', valid: false, status: 400 })
    } else {
        res.send({ message: 'HWID autorisé', valid: true, status: 200 })
    }
})

app.listen(port, () => {
    console.log('PORT : ' + port)
})
