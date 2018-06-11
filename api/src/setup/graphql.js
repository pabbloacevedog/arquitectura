// Imports
import graphqlHTTP from 'express-graphql'

// App Imports
import config from '../config/config.json'
import schema from '../schema'

// Setup GraphQL
export default function (server) {
	console.info('SETUP - GraphQL...')

	// API (GraphQL on route `/api`)
	server.use(
		config.graphql.endpoint, 
		graphqlHTTP((request, response, graphQLParams) => ({
			schema,
			graphiql: config.graphql.ide,
			pretty: config.graphql.pretty,
			context: { 
				request
			}
		}))
	)
}
