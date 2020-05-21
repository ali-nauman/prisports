const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

const playerTimingSchema = new mongoose.Schema({
    playerId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
});

// playerTimingSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('PlayerTiming', playerTimingSchema);