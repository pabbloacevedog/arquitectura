// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as user from './users/fields/mutations'
import * as login from './login/fields/mutations'

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...user,
    ...login
  }
})

export default mutation
