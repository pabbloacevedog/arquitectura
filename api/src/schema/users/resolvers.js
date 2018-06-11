// App Imports
import models from '../../models'

// Get users by ID
export async function getById(parentValue, {id_user}, context) {
	return await models.User.findOne({where: {id_user}})
}

// Get all users
export async function getAll(context) {
	console.log(context)
	return await models.User.findAll()
}

// Delete user
export async function remove(parentValue, {id_user}, context) {
	return await models.User.destroy({where: {id_user}})
}
