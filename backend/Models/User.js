const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    anweshaId: {
        type: String,
        unique: true,
    },
  
});


UserSchema.pre('save', async function (next) {
    if (!this.anweshaId) {
        const year = new Date().getFullYear();
        const lastUser = await mongoose.model('users').findOne().sort({ _id: -1 }); // Find the last user
        const lastId = lastUser && lastUser.anweshaId ? parseInt(lastUser.anweshaId.slice(-4)) : 0;
        this.anweshaId = `ANW${year}${String(lastId + 1).padStart(4, '0')}`;

    }
    next();
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;