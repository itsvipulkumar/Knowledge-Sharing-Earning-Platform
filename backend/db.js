const mongoose =require("mongoose")
// const url="mongodb+srv://stackoverflow:vipulstack@cluster0.8u2elln.mongodb.net/stackoverflow?retryWrites=true&w=majority"

const url="mongodb://stackoverflow:vipulstack@ac-fdb2o4y-shard-00-00.8u2elln.mongodb.net:27017,ac-fdb2o4y-shard-00-01.8u2elln.mongodb.net:27017,ac-fdb2o4y-shard-00-02.8u2elln.mongodb.net:27017/stackoverflow?ssl=true&replicaSet=atlas-ioxt6a-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect=()=>{
    mongoose.connect(url)
    .then((res)=>console.log("Mongo db is connected successfully"))
    .catch((err)=>console.log("Error : ",err))
}

// module.exports=connect