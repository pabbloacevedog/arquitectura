// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean} from 'graphql'

// User type
const UserType = new GraphQLObjectType({
	name: 'user',
	description: '...',

	fields: () => ({
		id_user: {type: GraphQLInt},
		usuario: {type: GraphQLString},
		email: {type: GraphQLString},
		password: {type: GraphQLString},
		id_tipo_perfil: { type: GraphQLString },
		foto_perfil: { type: GraphQLString },
		verificado: { type: GraphQLBoolean }
	})
})

export default UserType
