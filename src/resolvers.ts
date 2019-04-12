import { helloResolver } from "./hello";
import { postResolver } from "./post";
import { launchResolver } from "./launch";
import { userResolver } from "./user";
import { helloAuthResolver } from "./helloAuth";

const resolvers = [helloResolver, postResolver, launchResolver, userResolver, helloAuthResolver];

export {resolvers};