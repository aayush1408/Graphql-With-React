const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://aayush1408:aayush1408@ds263520.mlab.com:63520/graphql-ninja')
mongoose.connection.once('open',()=>{
    console.log('Connected to db');
});


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen('4000',()=>{
    console.log('Server running at 4000');
})