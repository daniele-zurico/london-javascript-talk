import { ApolloServer } from "apollo-server";
import { mergeSchemas } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import mongoose from "mongoose";
import { schemas } from './schemas';
import { resolvers } from './resolvers';

const MONGO_URL = 'localhost';
const MONGO_PORT = 27017;
const DB_NAME = 'postExample';
mongoose.set("debug", true);

mongoose.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/${DB_NAME}`);

const schema: GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

const server = new ApolloServer({schema});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});