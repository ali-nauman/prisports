const mongoose = require('mongoose');

const opponentSchema = new mongoose.Schema({
    playerId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    sportId: { type: mongoose.Types.ObjectId, ref: 'Sport', required: true },
    rank: {type: String, required: true}
});

module.exports = mongoose.model('OpponentLevel', opponentSchema);