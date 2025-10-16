import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string)
        console.log(`MongoDb connected: ${conn.connection.host}`)
    } catch (error : any) {
        console.log("error connecting to MongoDb:", error.message)
        process.exit(1)
    }
}