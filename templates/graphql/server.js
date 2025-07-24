const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const db=require("./config/db")
const typedefs=require("./typeDefs/typedefs")
const resolvers=require("./Mainresolver/Mainresolver")
const app = express();
db()
async function startserver(){
const server = new ApolloServer({ typeDefs:typedefs, resolvers });
await server.start();

server.applyMiddleware({ app });  

app.use(cors());  


app.listen(8000, () => {
  console.log('Server running on http://localhost:8000' + server.graphqlPath);
});

}
startserver()