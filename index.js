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

// * CRUD

app.get("/users", async(req, res) => {
 let users = await userModel.find()
  res.json({message:"success",users })  
});

app.post("/users", async(req,res) => { 
  const {name,email,password,age} = req.body;
  await userModel.insertMany({ name, email, password, age }) 
  res.json({message:"user added",success: true}) 
  })

app.put("/users", async(req,res) => { 
    const {name,email,password,age,_id} = req.body;
    let user = await userModel.findByIdAndUpdate({_id},{ name, email, password, age },{new:true}) 
    res.json({message:"success user updated"}) 
    })

app.delete("/users", async(req,res) => { 
      const {_id} = req.body;
      await userModel.findByIdAndDelete({_id}) 
      res.json({message:"success"}) 
      })


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))