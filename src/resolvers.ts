import { helloResolver } from "./hello";
import { postResolver } from "./post";
import { launchResolver } from "./launch";

const resolvers = [helloResolver, postResolver, launchResolver];

export {resolvers};