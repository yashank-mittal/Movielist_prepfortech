const mongoose = require('mongoose');
const { Pmovie } = require('./src/db/MoviesSchema');

const moviearray=[
    {
        title: "Blacksmith Scene",
        year: 1893,
        released:Date.now(),
        imdb:{
            rating:6.2
        },
        countries:[
            "USA","INDIA"
        ]
    },
    {
        title: "Blacksmith Scene",
        year: 1893,
        released:Date.now(),
        imdb:{
            rating:6.2
        },
        countries:[
            "USA","INDIA"
        ]
    },
    {
        title: "Blacksmith Scene",
        year: 1893,
        released:Date.now(),
        imdb:{
            rating:6.2
        },
        countries:[
            "USA","INDIA"
        ]
    },
];

function seed(){
    Pmovie.insertMany(moviearray)
    .then(() =>{
      console.log("DB Seeded");
    })
    .catch(e =>{
      console.log(e);
    })
  }
  

module.exports = {
    seed
};