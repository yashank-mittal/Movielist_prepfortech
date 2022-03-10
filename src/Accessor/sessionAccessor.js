const Session = require('../db/sessionSchema');

function createSession(userId,jwt){
    let session = new Session({ user_id: userId , jwt: jwt });
    session.save().then((data)=>{
        // console.log(data)
        console.log("Session saved")
    }).catch((e)=>{
        if(e.code == 11000){
            console.log("You are already login and cannot login again")
        }
    })
}

function deletesession(userId){
    let data = Session.deleteOne({ user_id: userId }).then(()=>{
        console.log("Session deleted")
    }).catch((e)=>{
        console.log(e);
    })
    return data;
}

function findSessionByjwt(jwt){
    return Session.findOne({ jwt: jwt });
}

module.exports = {
    createSession,
    deletesession,
    findSessionByjwt
}