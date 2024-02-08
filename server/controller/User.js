import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}

export const signupUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
        let user = await User.findOne({ email: email });
        if (user) { res.status(200).json({ message: "user already registered" }) }
        else {
            const newUser = new User({
                username, email, password
            })
            await newUser.save()
            res.status(201).json({message:"New user is created"})
        }
    } catch (error) {
        res.status(401).json({message:error})
    }
}

export const loginUser = async (req, res) => {
    const user = req.body
    try {
        const userDb = await User.findOne({ email: user.email, password: user.password })
        if (!userDb) return res.status(404).json((false));
        res.status(201).json(userDb.name);
    } catch(error) {
        res.status(404).json(false);
    }
}