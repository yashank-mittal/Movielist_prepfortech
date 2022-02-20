const jwt = require('jsonwebtoken');
const SECRETKEY = 'ABCD';

function checkifAuth(req,res,next){
    const tokenString = req.headers['authorization'];
    if(typeof tokenString !== 'undefined' && tokenString !== null){
        const actualToken = tokenString.split(' ')[1];
        if(typeof actualToken !== 'undefined' && actualToken !== null){
            let data = jwt.verify(actualToken, SECRETKEY);
            req.user = data;
            next();
        }
        else{
            res.status(401).send('Please login before accessing the API');
        }
    }else{
        res.status(401).send('Please login before accessing the API');
    }
}

module.exports = {
    checkifAuth
};