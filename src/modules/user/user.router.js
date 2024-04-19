import express from 'express'
import { userModel } from '../../../models/user.model.js';



const userRouter = express.Router()

userRouter.get("/users", async(req, res) => {
 let users = await userModel.find()
  res.json({message:"success",users })  
});

userRouter.post("/users", async(req,res) => { 
  const {name,email,password,age} = req.body;
  await userModel.insertMany({ name, email, password, age }) 
  res.json({message:"user added",success: true}) 
  })

userRouter.put("/users", async(req,res) => { 
    const {name,email,password,age,_id} = req.body;
    let user = await userModel.findByIdAndUpdate({_id},{ name, email, password, age },{new:true}) 
    res.json({message:"success user updated"}) 
    })

userRouter.delete("/users", async(req,res) => { 
      const {_id} = req.body;
      await userModel.findByIdAndDelete({_id}) 
      res.json({message:"success"}) 
      });


export default userRouter
