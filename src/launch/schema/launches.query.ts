import { gql } from "apollo-server";

const launchesQuery = gql`
	type Query {
		launches: [Launch]!
	}
`;

export { launchesQuery };