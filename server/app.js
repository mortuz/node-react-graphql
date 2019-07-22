const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin-requests
app.use(cors());

mongoose.connect('mongodb://mortuz:abc123@ds121871.mlab.com:21871/graphql-learning', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to database');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(8000, () => {
  console.log('App is running on port 8000');
})