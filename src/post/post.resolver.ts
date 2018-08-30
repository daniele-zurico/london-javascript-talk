import { postController } from "./post.controller";

const POST_ADDED = "POST_ADDED";

const postResolver = {
	Query: {
		posts(root: any, args: any, context: any) {
			return postController.posts();
		}
	},
	Mutation: {
		addPost(root: any, args: any, context: any) {
			return postController.addPost(args);
		}
	}
};

export { postResolver };
