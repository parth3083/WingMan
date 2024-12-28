import UserModel from "../models/user.model.js"
import * as UserService from "../services/user.service.js"
import { validationResult } from "express-validator"

export const createUserController = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const user = await UserService.createUser(req.body);
        const token = await user.generateToken();
        res.status(201).send({user,token})
        
            
    } catch (error) {
        console.error(error)
    }
}