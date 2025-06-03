import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    customerId:{
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    lastVisit:{
        type: Date,
        default: Date.now
    },
    lastActive:{
        type: Date,
        default: Date.now
    },
    expenditure:{
        type: Number,
        default: 0
    }
});

export default mongoose.model('Customer', customerSchema);