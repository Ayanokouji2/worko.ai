import { Schema, model, Document } from 'mongoose';

export interface User extends Document {
    email: string
    name: string
    city: string
    age: number
    zipCode: string
    isDeleted : Boolean
}

const userSchema: Schema<User> = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    age: {
        type: Number,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: true
    }
},
    { timestamps: true })


const userModel = model<User>('User', userSchema)

export default userModel;