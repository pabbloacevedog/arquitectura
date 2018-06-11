// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// User type
const PerfilType = new GraphQLObjectType({
  name: 'tipo_perfil',
  description: '...',

  fields: () => ({
    id_tipo_perfil: {type: GraphQLInt},
    nombre: {type: GraphQLString}
  })
})

export default PerfilType
