const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

const playerSportSchema = new mongoose.Schema({
    playerId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    sportId: { type: mongoose.Types.ObjectId, ref: 'Sport', required: true }
});

// playerSportSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('PlayerSport', playerSportSchema);