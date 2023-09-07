const express = require("express")
const router = express.Router()
const adminModel = require("../models/adminModel")
const bcrypt = require("bcrypt")
const Joi = require("joi")
const jwt = require("jsonwebtoken")

const validateAdmin = (item) => {
    const Schema = Joi.object({
        email: Joi.string().email({minDomainSegments:2}).required(),
        password:Joi.string().required().min(5)
    })
    return Schema.validate(item)
}

const generateAuthToken = (id) => {
  const token = jwt.sign({ id: id, isAdmin: true }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};


const registerAdmin=  async (req, res) => {
   try {
     const { error } = validateAdmin(req.body);
     if (error) return res.status(200).send({ error: error.details[0].message });
const {email, password}  = req.body
     const userExists = await adminModel.findOne({ email });
     if (userExists)
       return res.status(200).send({error:"The user with that email already exists"});

     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);
     const admin = await adminModel.create({ email, password: hashedPassword });

     if (!admin)
       return res.status(500).send("Faced an error when registering admin");
     return res.status(201).send(admin);
   } catch (error) {
     console.log(error);
     return res.status(500).send("Internal server error.");
   }
}



const loginAdmin=  async (req, res) => {
    try {
      const { email, password } = req.body
        const userExists = await adminModel.findOne({ email })
      if (!userExists) return res.status(200).send("Invalid password or email")
      const isCompared = await bcrypt.compare( password , userExists.password)
        if (!isCompared)return res.status(200).send({error:"Invalid password or email"})
        const Token = await generateAuthToken(userExists._id)
        return res.status(200).json({message:"User logged in successfully", token:Token})
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)  
    }
}

module.exports= {registerAdmin,loginAdmin}