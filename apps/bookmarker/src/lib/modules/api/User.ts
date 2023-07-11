import { v5 as uuidv5 } from 'uuid';

export type UserId = `user_${string}`;
// Used to store and retrieve the user from KV.
// Given the user as their unique login.
export type UserKey = string;

export type User = {
	id: UserId;
	email?: string;
};

export const createUser = (email?: string): { user: User; userKey: UserKey } => {
	const uuid = uuidv5('user', uuidv5.DNS);
	const id: UserId = `user_${uuid}`;
	const userKey = uuidv5('userKey', uuidv5.DNS);

	return {
		user: {
			id,
			email
		},
		userKey
	};
};
