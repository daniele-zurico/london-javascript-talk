import { makeExecutableSchema } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { postType, postQuery, postMutation, postSubscription } from "./schema";

const postSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: [postType, postQuery, postMutation, postSubscription]
});

export { postSchema };
