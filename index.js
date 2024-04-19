import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import userRouter from './src/modules/user/user.router.js'



const app = express()
const port = 3000

app.use(express.json())


// the connection
dbConnection()

app.use(userRouter)

// * CRUD



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))