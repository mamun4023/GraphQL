 const {GraphQLString}  = require('graphql');
const { UserModel } = require('../models');
const { CreateJwtToken } = require('../util/auth');

 const register = {
    type : GraphQLString,
    args : {
        username : {type : GraphQLString},
        email : {type : GraphQLString},
        password : {type : GraphQLString},
        displayName : {type : GraphQLString}
    },
    async resolve(parent, args){
        const {username, email, password, displayName} = args;
        const user = new UserModel({username, email, password, displayName})
        await user.save();
        const token = CreateJwtToken(user)
        return token
    }
 }

 const login = {
    type : GraphQLString,
    description : "login user",
    args : {
        email : {type : GraphQLString},
        password : {type : GraphQLString}
    },
    async resolve(parent, args){
        const user = await UserModel.findOne({email : args.email}).select('+password')
        if(!user || args.password !== user.password){
            throw new Error('Invalid Credentials') 
        }

        const token = CreateJwtToken(user);
        return token;
    }
 }


 module.exports = {
    register,
    login
}