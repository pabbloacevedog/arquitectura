// Imports
import {GraphQLString, GraphQLInt} from 'graphql'

// App Imports
import UserType from '../type'
import {remove} from '../resolvers'

// User remove
export const UserRemove = {
	type: UserType,
	args: {
		id_user: {
			name: 'id_user',
			type: GraphQLInt
		}
	},
	resolve: remove
}
