import { ApolloServer, PubSub } from "apollo-server";
import { mergeSchemas } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import mongoose from "mongoose";
import { schemas } from './schemas';
import { resolvers } from './resolvers';
import {LaunchAPI} from './launch/datasource/launch';

const MONGO_URL = 'localhost';
const MONGO_PORT = 27017;
const DB_NAME = 'postExample';
mongoose.set("debug", true);

mongoose.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/${DB_NAME}`);
export const pubsub = new PubSub();
const schema: GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

const server = new ApolloServer({
	schema, 
	dataSources: () => ({
		launchAPI: new LaunchAPI(),
	})
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});