import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { userType, userQuery, userMutation } from "./schema";

const userSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: [userType, userQuery, userMutation]
});

export {userSchema};