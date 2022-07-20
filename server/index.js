const express = require('express');
const colors = require("colors");
const connectDB = require("./config/db");
require("dotenv").config();
const schema = require('./schema/schema')
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 6000;
const app = express();

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, console.log(`server working on ${port}`));

