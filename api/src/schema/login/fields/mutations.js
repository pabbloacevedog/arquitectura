// Imports
import {GraphQLString, GraphQLInt} from 'graphql'

// App Imports
import UserType from '../type'
import {create} from '../resolvers'

// User Auth
export const userSignup = {
    type: UserType,
    args: {
        usuario: {
            name: 'usuario',
            type: GraphQLString
        },

        email: {
            name: 'email',
            type: GraphQLString
        },

        password: {
            name: 'password',
            type: GraphQLString
        },

        id_tipo_perfil: {
            name: 'id_tipo_perfil',
            type: GraphQLInt
        }
    },
    resolve: create
}
