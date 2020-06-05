const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const matchSchema = new Schema({
    courtId: { type: ObjectId, ref: 'Court', required: true },
    coachId: { type: ObjectId, ref: 'User', required: true },
    playerAId: { type: ObjectId, ref: 'User', required: true },
    playerARank: { type: String, required: true },
    playerBId: { type: ObjectId, ref: 'User', required: true },
    playerBRank: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
});


module.exports = mongoose.model('Match', matchSchema);