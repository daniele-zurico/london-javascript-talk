import { gql } from "apollo-server";

const launchesType = gql`
	type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
    }
    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }
    type Rocket {
        id: ID!
        name: String
        type: String
    }
    enum PatchSize {
        SMALL
        LARGE
    }
`;

export { launchesType };