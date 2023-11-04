const User = require('../modules/user');

const createUser = async(req,res)=>{
    try {
        const UserADD = User(req.body);
        console.log(UserADD);
        const CreateUser = await UserADD.save();
        
        res.status(201).send(CreateUser)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {createUser}