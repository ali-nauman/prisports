const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// To-Do: Create court model, import here and uncomment the reference
const Court = require('./court.model');
const practiceSessionSchema = new mongoose.Schema({
    courtId: { type: mongoose.Types.ObjectId , ref: Court },
    coachId: { type: mongoose.Types.ObjectId, ref: User },
    startTime: { type: Date },
    endTime: { type: Date },
    opponentId: { type: mongoose.Types.ObjectId, ref: User }
});

practiceSessionSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('PracticeSession', practiceSessionSchema);