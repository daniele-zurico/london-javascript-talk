import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { gql } from "apollo-server";

const helloSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			hello: String
		}
	`
});

export {helloSchema};