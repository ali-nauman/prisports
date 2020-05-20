const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const User = require('./user.model');
const playerTimingSchema = new mongoose.Schema({
    playerId: { type: mongoose.Types.ObjectId, ref: User, required: true },
    startTime: { type: Date },
    endTime: { type: Date }
});

playerTimingSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('PlayerTiming', playerTimingSchema);