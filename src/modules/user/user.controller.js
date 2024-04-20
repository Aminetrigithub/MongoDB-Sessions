import { userModel } from "../../../models/user.model.js";

const getAllUsers = async(req, res) => {
  let users = await userModel.find()
   res.json({message:"success",users })  
 }

const addUser =  async(req,res) => { 
  const {name,email,password,age} = req.body;
  await userModel.insertMany({ name, email, password, age }) 
  res.json({message:"user added",success: true}) 
  }


  const updateUser =   async(req,res) => { 
    const {name,email,password,age,_id} = req.body;
    let user = await userModel.findByIdAndUpdate({_id},{ name, email, password, age },{new:true}) 
    res.json({message:"success user updated"}) 
    }


const deleteUser =  async(req,res) => { 
      const {_id} = req.body;
      await userModel.findByIdAndDelete({_id}) 
      res.json({message:"success"}) 
      }


export {getAllUsers, addUser, updateUser, deleteUser};      