import mongoose from "mongoose"
import 'dotenv/config'

export default class db {
    static init(){
        console.log("Connecting to MongoDB...");

        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useFindAndModify: false
        });

        const db = mongoose.connection;

        db.on('error', () => {
            console.error("Failed to connect.");
            console.error("Check if your IP is whitelisted.");
        });

        db.once('open', () => {
            console.log("Successfully connected to MongoDB!")
        });
        
        return db;
    }
}