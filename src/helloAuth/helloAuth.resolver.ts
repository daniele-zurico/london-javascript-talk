import { AuthenticationError } from "apollo-server";

const helloAuthResolver = {
	Query: {
		helloAuth: (_: any, __: any, {isAuthorized}: any) => {
			console.log("isAuthorized", isAuthorized);
			if(isAuthorized) {
				return "Hello world!";
			} else {
				throw new AuthenticationError('User must be authenticated!')
			}
			
		}
	}
};

export {helloAuthResolver};