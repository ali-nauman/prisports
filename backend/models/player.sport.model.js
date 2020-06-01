const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const playerSportSchema = Schema({
    playerId: { type: ObjectId, ref: 'User', required: true },
    sportId: { type: ObjectId, ref: 'Sport', required: true },
    rankId: { type: ObjectId, ref: 'Rank', required: true }
});

module.exports = mongoose.model('PlayerSport', playerSportSchema);