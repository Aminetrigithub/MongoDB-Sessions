import express from 'express'
import mongoose from 'mongoose'




const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/nodeMongodb')
.then(() => console.log('Connected to CompassMongoDB!'))
.catch((err) => { console.error("error !") })

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number  
})
const userModel = mongoose.model('user',userSchema);


app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))