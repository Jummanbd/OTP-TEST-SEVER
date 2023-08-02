import mongoose from "mongoose";

const connect = async () => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

export default connect;