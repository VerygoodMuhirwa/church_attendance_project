const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    members: [
        {
            username: String,
            email: String,
            Class: String,
            family: String,
            numericalId:Number
        }
    ],
    memberCount:{type:Number, default:0}
}, { timestamps: true })


const membersModel = mongoose.model("MembersModel", memberSchema)
module.exports= membersModel