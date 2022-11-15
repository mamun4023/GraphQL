const express = require('express');
const app = express();
const dotenv = require('dotenv')
const GraphQLHTTP = require('express-graphql').graphqlHTTP;
const GraphQLSchema = require('./graphQL/schema');
const {connectDB} = require('./db');

dotenv.config();
connectDB();

app.use('/', GraphQLHTTP({
    schema : GraphQLSchema,
    graphiql : true
}))



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})