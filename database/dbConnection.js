import mongoose from "mongoose"

export const dbConnection = () => { 
  mongoose.connect('mongodb://localhost:27017/nodeMongodb')
  .then(() => console.log('Connected to CompassMongoDB!'))
  .catch((err) => { console.error("error !") })
 }