const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, "This field cannot be empty"] },
    lastName: { type: String, required: [true, "This field cannot be empty"] },
    emailAddress: { type: String, lowercase: true, unique: true, required: [true, "This field cannot be empty"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    phoneNumber: { type: String, required: [true, "This field cannot be empty"] },
    role: { type: String, required: [true, "This field cannot be empty"] }
});

userSchema.method('toJSON', function () {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        phoneNumber: this.phoneNumber,
        role: this.role
    };
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'emailAddress' });
userSchema.plugin(uniqueValidator, { message: 'is already taken.' });
userSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('User', userSchema);