const mongoose=require('mongoose');

const SessionSchema= new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    jwt:{
        type: String,
        required: true
    }
})

const Session = mongoose.model('Session',SessionSchema);

module.exports= Session;