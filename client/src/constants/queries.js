import gql from 'graphql-tag'

export const GET_USER_QUERY = gql`
query{
  users{
    id_user,
    usuario,
    email
  }
}
`
export const LOGIN_QUERY = gql`
query userLogin($email: String!, $password: String!){
  userLogin(email: $email, password: $password){
    token: token
  }
}
`
export const TIPO_PERFIL_QUERY = gql`
query{
  categorias{
    id_tipo_perfil,
    nombre
  }
}
`
