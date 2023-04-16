const mongoose =require( 'mongoose');
const { Schema } = mongoose;

// for creating account schema
const accountSchema = new Schema({
    car_number:{
        type: String,
        required:true
    },
    amount: {
        type: String,
        required: true
    }});

// for creating account model
module.exports = mongoose.model('accounts', accountSchema);

