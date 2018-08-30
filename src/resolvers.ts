import { helloResolver } from "./hello";
import { postResolver } from "./post";

const resolvers = [helloResolver, postResolver];

export {resolvers};