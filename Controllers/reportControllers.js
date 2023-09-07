const attendanceModel = require("../models/attendanceModel");
const membersModel = require("../models/membersModel");
const previousAttendanceModel = require("../models/previousAttendances");

const getReport = async (req, res) => {
    try {
        let attendance = await previousAttendanceModel.findOne({})

        if (!attendance) {
            return res.status(200).send([])
        }
        if (attendance.previousAttendances.length > 0) {
            attendance = attendance.previousAttendances[attendance.previousAttendances.length - 1]
        }

        const allMembers = await membersModel.findOne({})
        const totalMembers = allMembers.memberCount
        const GeneralPresenceRecords = {
          id: Math.floor(Math.random() * 5),
          yaje: attendance.yajeCount,
          yarasuye: attendance.yarasuyeCount,
          yarasuwe: attendance.yarasuweCount,
          ararwaye: attendance.ararwayeCount,
          afiteIndiMpamvu: attendance.afiteIndiMpamvuCount,
          yarafashije: attendance.yarafashijeCount,
          yarafashijwe: attendance.yarafashijweCount,
          yize7: attendance.yize7Count,
          yatangiyeIsabato: attendance.yatangiyeIsabatoCount,
          abashyitsi: attendance.abashyitsi,
        };
     
        const GeneralPercentageRecords = {
            id:Math.floor(Math.random() * 5),
           yaje: Math.floor((attendance.yajeCount / totalMembers) * 100),
           yarasuye: Math.floor(
             (attendance.yarasuyeCount / totalMembers) * 100
           ),
           yarasuwe: Math.floor(
             (attendance.yarasuweCount / totalMembers) * 100
           ),
           ararwaye: Math.floor(
             (attendance.ararwayeCount / totalMembers) * 100
           ),
           afiteIndiMpamvu: Math.floor(
             (attendance.afiteIndiMpamvuCount / totalMembers) * 100
           ),
           yarafashije: Math.floor(
             (attendance.yarafashijeCount / totalMembers) * 100
           ),
           yarafashijwe: Math.floor(
             (attendance.yarafashijweCount / totalMembers) * 100
           ),
           yize7: Math.floor((attendance.yize7Count / totalMembers) * 100),
           yatangiyeIsabato: Math.floor(
             (attendance.yatangiyeIsabatoCount / totalMembers) * 100
           ),
         };
       
     
        let familyAttendance= []
        for (const record of attendance.family) {
            const dataToReturn = {
              _id: record._id,
              name: record.name,
              yaje: record.familyYajeCount,
              yarasuye: record.familyYarasuyeCount,
              yarasuwe: record.familyYarasuweCount,
              afiteIndiMpamvu: record.familyAfiteIndiMpamvuCount,
              ararwaye: record.familyArarwayeCount,
              yarafashije: record.familyYarafashijeCount,
              yarafashijwe: record.familyYarafashijweCount,
              yize7: record.familyYize7Count,
              yatangiyeIsabato: record.familyYatangiyeIsabatoCount,
            };
            familyAttendance.push(dataToReturn)
        }

        const familyPercentages = []
        for (const record of attendance.family) {
            const dataToReturn = {
              _id: record._id,
              name: record.name,
              yaje: Math.floor((record.familyYajeCount / totalMembers) * 100) ,
              yarasuye:
                Math.floor((record.familyYarasuyeCount / totalMembers) * 100),
              yarasuwe:
                Math.floor((record.familyYarasuweCount / totalMembers) * 100),
              afiteIndiMpamvu:
                Math.floor((record.familyAfiteIndiMpamvuCount / totalMembers) * 100),
              ararwaye: Math.floor((record.familyArarwayeCount /totalMembers) *100),
              yarafashije: Math.floor((record.familyYarafashijeCount/totalMembers) *100),
              yarafashijwe: Math.floor((record.familyYarafashijweCount/totalMembers)*100),
              yize7: Math.floor((record.familyYize7Count/totalMembers) * 100),
              yatangiyeIsabato: Math.floor((record.familyYatangiyeIsabatoCount /totalMembers) * 100),
            };
            familyPercentages.push(dataToReturn);
          }


        const abarwayi = []
        const abafiteImpamvu = []
        for(const record of attendance.attendanceData) {
            if (record.ararwaye == true) {
                abarwayi.push(record)
            }
            if (record.afiteIndiMpamvu == true) {
                abafiteImpamvu.push(record)
            }
        }
        

        const data = [{
            GeneralPresenceRecords,
            GeneralPercentageRecords   
        }
        ]

        return res.status(200).json({data, familyAttendance , familyPercentages} )
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error")
    }
}


const getPreviousReports = async (req, res) => {
    try {
        const previousDatas = await previousAttendanceModel.findOne({})
        const dataToReturn = []
        for (const record of previousDatas.previousAttendances) {
          const formData = {
              id:record._id,
                date: record.createdAt.getDate(),
                month: record.createdAt.getMonth(),
            }
            dataToReturn.push(formData)
        }

        return res.status(200).send(dataToReturn)
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error")
    }
}


const getSingleReport = async(req, res) => {
    try {
const id= req.params.id
      const attendance = await previousAttendanceModel.findOne({})
       
       const recordToReturn = attendance.previousAttendances.find(data=>data._id ==id)
      return res.status(200).send(recordToReturn)
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error")
  }
  
}

const getAbarwayi = async (req, res) => {
  try {
    const attendance= await previousAttendanceModel.findOne({})
    const recordsToReturn = []
    const checkRecord = attendance.previousAttendances[attendance.previousAttendances.length - 1]
    checkRecord.attendanceData.map(data => {
      if (data.ararwaye || data.afiteIndiMpamvu) {
recordsToReturn.push(data.username)
      }
    })

    return res.status(200).send(recordsToReturn)

  } catch (error) {
     console.log(error);
     return res.status(500).send("Server error");
  }
}
module.exports= {getReport, getPreviousReports ,getSingleReport , getAbarwayi}