const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const sportSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

sportSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('Sport', sportSchema);