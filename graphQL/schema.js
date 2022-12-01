
const {GraphQLSchema, GraphQLObjectType} = require('graphql');

const {users} = require('./query');
const  {register, login }= require('./mutation');



// Define Query
const QueryType  = new GraphQLObjectType({
    name : "QueryType",
    description : "Queries",
    fields : { users }
})


// Define Mutation
const MutationType = new GraphQLObjectType({
    name : "MutationType",
    description : 'mutations',
    fields : {register, login}
})




module.exports = new GraphQLSchema({
    query : QueryType,
    mutation : MutationType
})