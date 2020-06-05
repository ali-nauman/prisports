const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const courtSchema = new Schema({
    name: { type: String, required: true, unique: true },
    sportId: { type: ObjectId, ref: 'Sport', required: true }
});

module.exports = mongoose.model('Court', courtSchema);