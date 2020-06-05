const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const playerTimingSchema = new Schema({
    playerId: { type: ObjectId, ref: 'User', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
});

module.exports = mongoose.model('PlayerTiming', playerTimingSchema);