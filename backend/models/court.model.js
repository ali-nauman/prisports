const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const courtSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

courtSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('Court', courtSchema);