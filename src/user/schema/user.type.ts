import { gql } from "apollo-server";

const userType = gql`
    type User {
        email: String
        token: String
    }
`;

export {userType};