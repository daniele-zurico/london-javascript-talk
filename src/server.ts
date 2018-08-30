import { ApolloServer } from "apollo-server";
import { mergeSchemas } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import {
	gql,
	makeExecutableSchema
} from "apollo-server";


const helloSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			hello: String
		}
	`
});
const helloResolver = {
	Query: {
		hello: () => {
			return "Hello world!";
		}
	}
};

const schemas = [helloSchema];
const resolvers = [helloResolver];

const schema: GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

const server = new ApolloServer({schema});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});