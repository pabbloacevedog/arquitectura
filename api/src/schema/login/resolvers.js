// App Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import models from '../../models'
import config from '../../config/config'

//login
export async function login(parentValue, { email, password }, context) {
    const user = await models.User.findOne({ where: { email } })
    console.log("########### INICIO #############")
    console.log(context.request.headers)
    console.log("############ FIN ###############")

    if (!user) {
    // User does not exists
    throw new Error(`No tenemos ningún usuario registrado con el email ${ email }. Por favor regístrese.`)
    } else {
        const userDetails = user.get()
        const userDetailsToken = {
            id_user: userDetails.id_user,
            usuario: userDetails.usuario,
            email: userDetails.email,
            id_tipo_perfil: userDetails.id_tipo_perfil,
            foto_perfil: userDetails.foto_perfil
        }

        // User exists
        const passwordMatch = await bcrypt.compare(password, userDetails.password)

        if (!passwordMatch) {
        // Incorrect password
        throw new Error(`Lo sentimos, la contraseña que ingresaste es incorrecta. Inténtalo de nuevo.`)
        } 
        else {
            return {
                token: jwt.sign(userDetailsToken, config.secret)
            }
        }
    }
}

// Create user
export async function create(parentValue, { usuario, email, password, id_tipo_perfil }) {
    // Users exists with same email check
    const user = await models.User.findOne({ where: { email } })

    if (!user) {
        // User no existe
        const passwordHashed = await bcrypt.hash(password, config.saltRounds)

        await models.User.create({
            usuario,
            email,
            password: passwordHashed,
            id_tipo_perfil,
            foto_perfil: config.foto_perfil_generica,
            verificado: false

        })
        const user = await models.User.findOne({ where: { email } })
        const userDetails = user.get()
        const userDetailsToken = {
            id_user: userDetails.id_user,
            usuario: userDetails.usuario,
            email: userDetails.email,
            id_tipo_perfil: userDetails.id_tipo_perfil,
            foto_perfil: userDetails.foto_perfil,
            verificado: userDetails.verificado
        }
        return {
            user: userDetails,
            token: jwt.sign(userDetailsToken, config.secret)
        }

    } 
    else {
        // User existe
        throw new Error(`El email ${ email } ya esta registrado. Intenta iniciar sesión.`)
    }
}
