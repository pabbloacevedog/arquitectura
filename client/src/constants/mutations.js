import gql from 'graphql-tag'

export const CREATE_USER_MUTATION = gql`
    mutation userSignup (
    $username: String!,
    $email: String!,
    $password:String!,
    $tipo_perfil:Int!
    ) {
      userSignup(
      usuario:$username,
      email: $email,
      password:$password,
      id_tipo_perfil:$tipo_perfil
      ) {
        token
      }
    }
`

export const COMUNAS_MUTATION = gql`
    mutation comunas (
    $id_region:Int!
    ) {
      comunas(
      id_region:$id_region
      ) {
        id_region,
        nombre
      }
    }
`
