import mongoose from 'mongoose';
import { DB_NAME } from '../constants';

const URI = process.env.MONGO_URI as string;


export default async function connectDB() {
    try {
        await mongoose
                .connect(`${URI}/${DB_NAME}`)
            
        console.log(`Connected to the database ${DB_NAME}`)
                
    }
    catch (err: any) {
        console.log(`Error connecting to the database ${err.message}`)
    }
}