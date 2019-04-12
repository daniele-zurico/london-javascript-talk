import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { gql } from "apollo-server";

const helloAuthSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			helloAuth: String
		}
	`
});

export {helloAuthSchema};