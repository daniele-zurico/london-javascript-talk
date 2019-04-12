import { gql } from "apollo-server";

const userMutation = gql`
	type Mutation {
        login(email: String): User
    }
`;
export { userMutation };