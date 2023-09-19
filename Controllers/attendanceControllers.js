const attendanceModel = require("../models/attendanceModel");
const previousAttendanceModel = require("../models/previousAttendances");

const addAttendance = async (req, res) => {
    try {
        const { abashyitsi, family } = req.body;
        let newRecord = await attendanceModel.findOne({})
        if (!newRecord) {
            newRecord = await attendanceModel.create({ abashyitsi, family: [], attendanceData: [] })
          
            for (const record of req.body.allAttendance) {
                newRecord.attendanceData.push(record);
                const familyExists = newRecord.family.find(
                    (data) => data.name == record.family
                );
                if (!familyExists) {
                    newRecord.family.push({ name: record.family });
                }
                if (record.yarasuye == true) {
                    newRecord.yarasuyeCount += 1;
                    const familyExists = newRecord.family.find(
                        (data) => data.name == record.family
                    );
                    familyExists.familyYarasuyeCount += 1;
                }

                if (record.yaje == true) {
                    newRecord.yajeCount += 1;
                    const familyExists = newRecord.family.find(
                        (data) => data.name == record.family
                    );
                    familyExists.familyYajeCount += 1;
                }

                if (record.yarasuwe === true) {
                    newRecord.yarasuweCount += 1;
                    const familyExists = newRecord.family.find(
                        (data) => data.name == record.family
                    );
                    familyExists.familyYarasuweCount += 1;
                }

                if (record.ararwaye === true) {
                    newRecord.ararwayeCount += 1;
                    const familyExists = newRecord.family.find(
                        (data) => data.name == record.family
                    );
                    familyExists.familyArarwayeCount += 1;
                }

                if (record.yarafashije === true) {
                    newRecord.yarafashijeCount += 1;
                    const familyExists = newRecord.family.find(
                        (data) => data.name == record.family
                    );
                    familyExists.familyYarafashijeCount += 1;
                }

                if (record.yarafashijwe == true) {
                    newRecord.yarafashijweCount += 1;
                    const familyExists = newRecord.family.find(
                        (data) => data.name == record.family
                    );
                    familyExists.familyYarafashijweCount += 1;
                }

                if (record.yatangiyeIsabato === true) {
                    newRecord.yatangiyeIsabatoCount += 1;
                    const familyExists = newRecord.family.find(
                        (data) => data.name == record.family
                    );
                    familyExists.familyYatangiyeIsabatoCount += 1;
                }

                if (record.afiteIndiMpamvu === true) {
                    newRecord.afiteIndiMpamvuCount += 1;
                    const familyExists = newRecord.family.find(
                        (data) => data.name == record.family
                    );
                    familyExists.familyAfiteIndiMpamvuCount += 1;
                }

                if (record.yize7 === true) {
                    newRecord.yize7Count += 1;
                    const familyExists = newRecord.family.find(
                        (data) => data.name == record.family
                    );
                    familyExists.familyYize7Count += 1;
                }
            }
            await newRecord.save();
             let previousAttendance = await previousAttendanceModel.findOne({});
             if (!previousAttendance) {
                 previousAttendance = new previousAttendanceModel();
                             previousAttendance.previousAttendances.push(
                               newRecord
                             );

            } 
            await previousAttendance.save()
           return res
                .status(201)
                .json({ message: "Attendance added successfully", newRecord });

        }
      
        if (newRecord) {
            const prevAttandance = await previousAttendanceModel.findOne({})
            const prevRecord = await attendanceModel.findOne({})
            await attendanceModel.findByIdAndDelete(prevRecord._id);
            await prevRecord.deleteOne()
            const { abashyitsi } = req.body;
            let newRecord = await attendanceModel.findOne({})
            if (!newRecord) {
                newRecord = await attendanceModel.create({ abashyitsi, family: [], attendanceData: [] })
          
                for (const record of req.body.allAttendance) {
                    newRecord.attendanceData.push(record);
                    const familyExists = newRecord.family.find(
                        (data) => data.name == record.family
                    );
                    if (!familyExists) {
                        newRecord.family.push({ name: record.family });
                    }
                    if (record.yarasuye == true) {
                        newRecord.yarasuyeCount += 1;
                        const familyExists = newRecord.family.find(
                            (data) => data.name == record.family
                        );
                        familyExists.familyYarasuyeCount += 1;
                    }

                    if (record.yaje == true) {
                        newRecord.yajeCount += 1;
                        const familyExists = newRecord.family.find(
                            (data) => data.name == record.family
                        );
                        familyExists.familyYajeCount += 1;
                    }

                    if (record.yarasuwe === true) {
                        newRecord.yarasuweCount += 1;
                        const familyExists = newRecord.family.find(
                            (data) => data.name == record.family
                        );
                        familyExists.familyYarasuweCount += 1;
                    }

                    if (record.ararwaye === true) {
                        newRecord.ararwayeCount += 1;
                        const familyExists = newRecord.family.find(
                            (data) => data.name == record.family
                        );
                        familyExists.familyArarwayeCount += 1;
                    }

                    if (record.yarafashije === true) {
                        newRecord.yarafashijeCount += 1;
                        const familyExists = newRecord.family.find(
                            (data) => data.name == record.family
                        );
                        familyExists.familyYarafashijeCount += 1;
                    }

                    if (record.yarafashijwe == true) {
                        newRecord.yarafashijweCount += 1;
                        const familyExists = newRecord.family.find(
                            (data) => data.name == record.family
                        );
                        familyExists.familyYarafashijweCount += 1;
                    }

                    if (record.yatangiyeIsabato === true) {
                        newRecord.yatangiyeIsabatoCount += 1;
                        const familyExists = newRecord.family.find(
                            (data) => data.name == record.family
                        );
                        familyExists.familyYatangiyeIsabatoCount += 1;
                    }

                    if (record.afiteIndiMpamvu === true) {
                        newRecord.afiteIndiMpamvuCount += 1;
                        const familyExists = newRecord.family.find(
                            (data) => data.name == record.family
                        );
                        familyExists.familyAfiteIndiMpamvuCount += 1;
                    }

                    if (record.yize7 === true) {
                        newRecord.yize7Count += 1;
                        const familyExists = newRecord.family.find(
                            (data) => data.name == record.family
                        );
                        familyExists.familyYize7Count += 1;
                    }
                }
                await newRecord.save();
                prevAttandance.previousAttendances.push(newRecord)
                await prevAttandance.save()
                return res
                    .status(201)
                    .json({ message: "Attendance added successfully", newRecord });
            }
      
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error ")
    }

}



const deleteAttendance = async( req, res)=> {
    try {
        const id = req.params.id
    let finding = await previousAttendanceModel.findOne()
        const indexToRemove = await finding.previousAttendances.findIndex(data => data._id.toString() === id)
        if (indexToRemove === -1) {
            return res.status(404).send({error:"Record not found"})
        }
        finding.previousAttendances.splice(indexToRemove, 1)
        await finding.save()
        return res.status(200).send(finding)
            
    } catch (error) {
        console.log(error);

        return res.status(500).send("Server error")
    }
}
module.exports = { addAttendance, deleteAttendance };
