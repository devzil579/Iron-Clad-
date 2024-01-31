import User from '../models/user.models.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const signup = async (req,res)=>{
    const { userName, email, password} = req.body

    if(!userName || !email || !password || userName === '' || email === '' || password === ''){
        next(errorHandler(400,'All fields are required'))
    }

    const hashPassword = bcryptjs.hashSync(password,10)

    const newUser = new User({
        userName,
        email,
        password:hashPassword,
    })


    try{

        await newUser.save();
        res.json('SignUp Successfull')

    }catch(error){
        res.status()
    }

    await newUser.save();
    res.json('SignUp Successfull')
}