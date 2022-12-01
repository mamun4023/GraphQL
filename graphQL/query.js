const { GraphQLList } = require('graphql');
const { UserType } = require('./type');
const {UserModel} = require('../models');



const users = {
    type : new GraphQLList(UserType),
    resolve(parent, args){
        return UserModel.find()
    }
}

module.exports = {
    users
}