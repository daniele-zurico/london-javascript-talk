import { User } from "./user.model";
var randtoken = require('rand-token');

const userController = {
	findOrCreateUser: (email: String) =>  User.findOneAndUpdate(
		{email: email}, 
		{
			$set:{email:email, token: randtoken.generate(64)}
		}, 
		{new: true, upsert: true}
	),
	findUser: async(token: String) => {
		const found = await User.findOne({ token });
		if(found !== null) {
			return true
		} else {
			return false;
		}
	}
};

export { userController };