const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const opponentSchema = new Schema({
    playerId: { type: ObjectId, ref: 'User', required: true },
    sportId: { type: ObjectId, ref: 'Sport', required: true },
    rank: { type: String, required: true }
});

module.exports = mongoose.model('OpponentLevel', opponentSchema);