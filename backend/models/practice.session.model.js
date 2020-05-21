const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

const practiceSessionSchema = new mongoose.Schema({
    courtId: { type: mongoose.Types.ObjectId, ref: 'Court', required: true },
    coachId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    playerAId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    playerBId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
});

// practiceSessionSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('PracticeSession', practiceSessionSchema);