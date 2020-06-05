const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const interestSchema = new Schema({
    playerID: { type: ObjectId, ref: 'User', required: true },
    sportId: { type: Types.ObjectId, ref: 'Sport', required: true }
});

module.exports = mongoose.model('PlayerInterest', interestSchema);