// Imports
import {GraphQLInt, GraphQLList} from 'graphql'

// App Imports
import PerfilType from '../type'
import {getAll} from '../resolvers'

// Users All
export const categorias = {
  type: new GraphQLList(PerfilType),
  resolve: getAll
}