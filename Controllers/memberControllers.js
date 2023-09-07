const membersModel = require("../models/membersModel")


const addMembers = async (req, res) => {
   try {
       let newRecord = await membersModel.findOne({});
       if (newRecord === null) {
    newRecord= new membersModel()
}
       newRecord.members.push(req.body);
     newRecord.memberCount += 1;
       await newRecord.save();
       return res.status(201).json({message:"Member added successfully" , newRecord})
   } catch (error) {
       console.log(error);
       return res.status(500).send("Server error")
   }
    

    
}


const getMembers = async (req, res) => {
  try {
    const allUsers = await membersModel.findOne(); 

    if (!allUsers) {
      return res.status(200).send({message:"No members found"});
    }

    const membersWithNumericalIds = allUsers.members.map((member, index) => ({
      ...member.toObject(),
        numericalId: index + 1,
    }));

      
    const modifiedUserDocument = {
      ...allUsers.toObject(),
      members: membersWithNumericalIds,
      };
      await allUsers
    return res.status(200).json({modifiedUserDocument});
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
};


const deleteMember = async (req, res) => {  
    try {
        const id = req.params.id
        let findingRecord = await membersModel.findOne({})
        for (const record of findingRecord.members) {
            if (record._id == id) {
                findingRecord.members = await findingRecord.members.filter(data => data !== record)
                findingRecord.memberCount -=1
            }
        }
    
        await findingRecord.save()

         res.status(200).json({message:"Member deleted successfully" } )
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error");
    }
}


const updateMember = async (req, res) => {
    try {
        const id = req.params.id
        const recordToUpdate = await membersModel.findOne({})
        for (let record of recordToUpdate.members) {
            if (record._id == id) {
                const updated = {
                    ...req.body,
                    _id:id
                }
                recordToUpdate.members = recordToUpdate.members.filter((data) => data !== record)
                recordToUpdate.memberCount -=1
                record = updated
                recordToUpdate.members.push(updated)
                recordToUpdate.memberCount +=1
            }
        }
        await recordToUpdate.save()
        const members= await membersModel.find()
        return res.status(200).json({message:"Record updated successfully" , members})
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error");
    }
}

module.exports = { addMembers ,getMembers , deleteMember ,  updateMember }
