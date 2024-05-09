import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs"
import createToken from '../utils/createToken.js'

const createUser = asyncHandler(async (req, res) => {
    const { username, password} = req.body;

    if ( !username || !password){
        throw new Error("Please fill all the inputs");
    }

    const userExists = await User.findOne({ username });
    if(userExists) res.status(400).send('User already exists');

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)      //mix salt to password 
    const newUser = new User({username, password: hashedPassword});

    try{
        await newUser.save();         
        createToken(res, newUser._id);

        res.
        status(201)
        .json({
            id: newUser._id,
            username: newUser.username,
              });

    } catch (error) {
        res.status(400)
        throw new Error("Invalid user data")
    }

});

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (isPasswordValid) {
            const token = createToken(res, existingUser._id); 
            res.status(201).json({
                id: existingUser._id,
                username: existingUser.username,
                token: token 
            });
            return;
        }
    }
    res.status(401).json({ message: "Invalid user or password" });
});


const logoutCurrentUser = asyncHandler(async (req,res) => {
    res.cookie('jwt' , '',  {
        httpOnly: true,
        expires: new Date(0),
    })

    res.status(200).json({message: "Logged out successfully"})
});

export { 
    createUser,
    loginUser,
    logoutCurrentUser
};