import { addMockFunctionsToSchema, makeExecutableSchema } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { postType, postQuery, postMutation } from "./schema";

const postSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: [postType, postQuery, postMutation]
});

export { postSchema };
