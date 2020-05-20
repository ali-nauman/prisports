const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const User=require('./user.model');
const Court = require('./court.model');
const Sport=require('./sport.model');
const PlayerTiming=require('./PlayerTimings.model');
const matchSchema = new mongoose.Schema({
    courtId: { type: mongoose.Types.ObjectId , ref: Court },
    coachId: { type: mongoose.Types.ObjectId, ref: User },
    sportId: {type: mongoose.Types.ObjectId, ref: Sport },
    playerId: { type: mongoose.Types.ObjectId, ref: User },
    opponentId: { type: mongoose.Types.ObjectId, ref: User },
    playerTimings: { type: mongoose.Types.ObjectId, ref: PlayerTiming }
});

matchSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('Match',  matchSchema);