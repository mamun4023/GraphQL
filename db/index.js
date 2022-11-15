const mongoose = require('mongoose');

const connectDB = async ()=>{
    const connn = await mongoose.connect(process.env.MONGO_URI)
    console.log("DB connected")
}


module.exports  = {connectDB}