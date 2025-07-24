const { gql } = require("apollo-server");

const typedefs = gql`
  type Query {
    getmydata(id: String): AuthResponse
  }

  type Mutation {
    login(username: String!, password: String!): AuthResponse
    signup(username: String!, email: String!, password: String!): AuthResponse
  }

  type AuthResponse {
    token: String
    user: User
    message: String
  }

  type User {
    id: ID!
    username: String!
    email: String!
  }
`;

module.exports = typedefs;
