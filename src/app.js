"use strict";

import {GraphQLServer} from 'graphql-yoga';
import Query from './resolvers/Query';
import User from './resolvers/User';
import data from './data';

//Initialize data required to start GraphQL server.
const typeDefs = "./src/schema.graphql";
const resolvers = {Query, User};
const context = {data};

//Set up and start the server.
const server = new GraphQLServer({typeDefs, resolvers, context});
server.start({port: 11111}, () => {console.log("Server running on port 11111")});