const mongoose = require("mongoose");

const databaseConnect =async()=>{
    try {
            mongoose.set("strictQuery",true)
           await mongoose.connect("mongodb://localhost:27017/mydatabase")
               console.log("✅ MongoDB connected successfully");

        
    } catch (error) {
        
    }

}

module.exports=databaseConnect;
