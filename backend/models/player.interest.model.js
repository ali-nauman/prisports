const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
    playerID: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
    sportId: { type: mongoose.Types.ObjectId, ref: 'Sport', required: true }
});

module.exports = mongoose.model('PlayerInterest', interestSchema);