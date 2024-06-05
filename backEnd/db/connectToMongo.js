import mongoose from "mongoose";

const connectToMongo = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URL,);
        console.log("connected to mongo")
    } catch (error) {
        console.log("Error connecting to mongo",error.message)
    }
}

export default connectToMongo;