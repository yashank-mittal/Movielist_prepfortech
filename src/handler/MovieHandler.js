const { Pmovie } = require('../db/MoviesSchema');



async function listmovies(req,res){
    await Pmovie.find({}).then((data)=>{
        console.log(data);
        res.send("Movie Fetched Completely");
    }).catch((e)=>{
        console.log(e);
    })
}

module.exports = {
    listmovies
}