require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AuthRoutes = require('./src/routes/authenticate');
const MovieRoute = require('./src/routes/movie');
const { seed } = require('./seed');


mongoose.connect(process.env.MONGO_URL, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        // useFindAndModify : true
    })
    .then(() => {
        console.log("DB Connected")
    })
    .catch(e => {console.log("Error Occur");console.log(e);});


app.use(bodyParser.json());
app.use(express.json());
app.use('/auth',AuthRoutes);
app.use('/movie',MovieRoute);

// seed();

app.listen(3000,()=>{
    console.log("Running Server");
})