import { gql } from "apollo-server";

const userQuery = gql`
	type Query {
        isLoggedIn(token: String): Boolean
    }
`;

export { userQuery };
