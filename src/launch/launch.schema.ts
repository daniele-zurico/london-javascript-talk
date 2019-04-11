import { makeExecutableSchema } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { launchesType } from "./schema/launches.type";
import { launchesQuery } from "./schema/launches.query";

const launchSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: [launchesType, launchesQuery]
});

export { launchSchema };