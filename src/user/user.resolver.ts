import { userController } from "./user.controller";

const userResolver = {
	Mutation: {
		login: (root: any, {email}: any, context: any) => userController.findOrCreateUser(email)
	},
	Query: {
		isLoggedIn: (root: any, {token}: any, context: any) => userController.findUser(token)
	}
};

export {userResolver};