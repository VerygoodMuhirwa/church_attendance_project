const mongoose = require("mongoose")
const Schema = mongoose.Schema

const attendanceSchema = new Schema(
  {
    attendanceData: [
      {
        id: String,
        username: String,
        family: String,
        email: String,
        Class: String,
        yaje: {
          type: Boolean,
          default: false,
        },

        yarasuye: {
          type: Boolean,
          default: false,
        },
        yarasuwe: {
          type: Boolean,
          default: false,
        },
        ararwaye: {
          type: Boolean,
          default: false,
        },
        yatangiyeIsabato: {
          type: Boolean,
          default: false,
        },
        yarafashije: {
          type: Boolean,
          default: false,
        },
        yarafashijwe: {
          type: Boolean,
          default: false,
        },
        afiteIndiMpamvu: {
          type: Boolean,
          default: false,
            },
            yize7: {
                type: Boolean,
                default:false
        }
      },
    ],
    family: [
      {
        name: String,
        familyYajeCount: { type: Number, default: 0 },
        familyYarasuyeCount: { type: Number, default: 0 },
        familyYarasuweCount: { type: Number, default: 0 },
        familyArarwayeCount: { type: Number, default: 0 },
        familyYarafashijeCount: { type: Number, default: 0 },
        familyYarafashijweCount: { type: Number, default: 0 },
        familyYatangiyeIsabatoCount: { type: Number, default: 0 },
        familyAfiteIndiMpamvuCount: { type: Number, default: 0 },
        familyYize7Count: { type: Number, default: 0 },
      },
    ],
    yajeCount: { type: Number, default: 0 },
    yarasuyeCount: { type: Number, default: 0 },
    yarasuweCount: { type: Number, default: 0 },
    ararwayeCount: { type: Number, default: 0 },
    yarafashijeCount: { type: Number, default: 0 },
    yarafashijweCount: { type: Number, default: 0 },
    yatangiyeIsabatoCount: { type: Number, default: 0 },
    afiteIndiMpamvuCount: { type: Number, default: 0 },
    yize7Count: { type: Number, default: 0 },
    abashyitsi: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);


const attendanceModel = mongoose.model("attendancemodel", attendanceSchema)
module.exports = attendanceModel

