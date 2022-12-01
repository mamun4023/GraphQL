const express = require('express');
const app = express();
const dotenv = require('dotenv')
const GraphQLHTTP = require('express-graphql').graphqlHTTP;
const GraphQLSchema = require('./graphQL/schema');
const {connectDB} = require('./db');
const {CreateJwtToken} = require('./util/auth');
const {authenticate}  = require("./middleware/auth"); 

dotenv.config();
connectDB();

app.use(authenticate)

// app.get('/', (req, res)=>{
//     console.log(req.verifiedUser);
// })

// app.get('/auth', (req, res)=>{
//     res.json(
//         CreateJwtToken({
//             username : "tohid",
//             email : "tohid@gmail.com",
//             displayName : "john Doe"
//         })
//     )
// })

app.use('/', GraphQLHTTP({
    schema : GraphQLSchema,
    graphiql : true
}))


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})