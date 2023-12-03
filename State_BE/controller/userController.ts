import {Request, Response} from "express";
import bcrypt from "bcrypt"
import crypto from "crypto"
import userModel from "../Model/userModel";
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
try {
    const {userName, email, password} = req.body;

    const generateSalt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, generateSalt);

    const token = crypto.randomBytes(3).toString("hex")

    const user = await userModel.create({
        userName,
        email,
        password: hashed,
        verificationToken: token,
        avatar: userName.charAt(0)
    });
        return res.status(201).json({
            message: "user created",
            data: user,
        });
} catch (error: any) {
    return res.status(404).json({
        message: "Error",
        data: error.message
    });
}
};

export const signInUser = async (req:Request, res:Response) =>{
    try {
        const {email, password} = req.body;
        const getUser: any = await userModel.findOne({email});

        if(getUser){
            const passChecker = await bcrypt.compare(password, getUser.password);

            if(passChecker) {
                if(getUser.verified && getUser.verificationToken === ""){
                    const webToken  = jwt.sign({ id: getUser._id }, "justAsafe", {expiresIn: "2d"
                });
                return res.status(201).json({
                    message: "user Sign in",
                    data: webToken,
                })
                } else{
                    return res.status(404).json({
                        message: "Your Acccount Has not been Verified",
                    });
                } 
            } else {
                return res.status(404).json({
                    message: "Please Check your Password"
                });
            }
        } else {
            return res.status(404).json({
                message: "Please Check Your Email"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
};

export const verifyUser = async (req: Request, res: Response) => {
    try {
        const {token, email} = req.body

        const getWithEmail = await userModel.findOne ({ email })
        const getWithToken = await userModel.findOne({
            verificationToken: token
        });

        if(getWithEmail && getWithToken){
            await userModel.findByIdAndUpdate(getWithEmail._id,
                {
                 verificationToken: "",
                 verified: true,   
                },
                {new: true}
         );

         return res.status(201).json({
            message: "User is Verified....you can now Sign in",
         });
        } else {

            return res.status(404).json({
                message: "Something Went Wrong",
            });
        }
    } catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
}

export const getOneUser = async (req:Request, res:Response) => {
try {
    const {userId} = req.params;

    const user = await userModel.findById(userId);

    return res.status(201).json({
        message: "user Data",
        data: user
    });
} catch (error) {
    return res.status(404).json({
        message: "error"
    })
}
}