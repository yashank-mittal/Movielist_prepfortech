const mongoose=require('mongoose');

const MoviesSchema= new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    year:{
        type: Number
    },
    released:{
        date:{
            type: Date
        }
    },
    imdb:{
        rating:{
            type: Number
        }
    },
    countries:[
        {
            type: String
        }
    ]
})

const Pmovie = mongoose.model('Pmovie',MoviesSchema);

module.exports={
    Pmovie
};