import express, { json } from 'express'
const app = express()
const port = 3000

app.use(json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))