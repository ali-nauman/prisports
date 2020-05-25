const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

const matchSchema = new mongoose.Schema({
    courtId: { type: mongoose.Types.ObjectId, ref: 'Court', required: true },
    coachId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    playerAId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    playerARank: { type: String, required: true },
    playerBId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    playerBRank: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
});

// matchSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('Match', matchSchema);