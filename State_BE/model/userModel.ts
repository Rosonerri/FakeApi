import {Document, Schema, model} from "mongoose"

interface iUser{
    userName: string;
    email: string;
    password: string
    avatar: string;
    verificationToken: string;
    verified: boolean;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
    {
        userName: {type: String},
        email: {type: String},
        password: {type: String},
        avatar: {type: String},
        verificationToken: {type: String, unique: true},
        verified: {type: Boolean, default: false}
    },
    {timestamps: true}
);

export default model<iUserData>("Users", userModel);