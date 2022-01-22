const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    charts: { type: Number, default: 0 },
    maxCharts: { type: Number, default: 3 },
    email: String,
    pairs: [{ type: String, default: null }]
});

mongoose.model('users', userSchema);