const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const attendanceSchema = new Schema({
    playerId: { type: ObjectId, ref: 'User', required: true },
    checkinTime: { type: Date, required: true },
    sports: [{ type: ObjectId, ref: 'Sport', required: true }],
});

module.exports = mongoose.model('PlayerAttendance', attendanceSchema);