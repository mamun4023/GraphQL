
const {GraphQLSchema, GraphQLObjectType} = require('graphql');

const {} = require('./query');
const  { }= require('./mutation');



// Define Query
const QueryType  = new GraphQLObjectType({
    name : "QueryType",
    description : "Queries",
    fields : {

    }
})


// Define Mutation
const MutationType = new GraphQLObjectType({
    name : "MutationType",
    description : 'mutations',
    fields : {

    }
})




module.exports = new GraphQLSchema({
    query : QueryType,
    mutation : MutationType
})