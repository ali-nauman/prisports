const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    playerId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    checkinTime: { type: Date, required: true }
});

module.exports = mongoose.model('PlayerAttendance', attendanceSchema);