import Vue from 'vue'
import Contenedor from '../Contenedor/main.vue'
import {CREATE_USER_MUTATION} from '../../constants/mutations'
import { TIPO_PERFIL_QUERY } from '../../constants/queries'
import {getUserFromToken} from '../../utils/authService'
export default Vue.component('Registro', {
    $validates: true,
    data () {
        return {
            email: '',
            password: '',
            username: '',
            confirm: '',
            tipo_perfil: 0,
            title: 'Registro',
            items: [],
            error: '',
            alert: false
        }
    },
    components: {
        Contenedor
    },
    methods: {
        register () {

            this.tipo_perfil = this.tipo_perfil.id
            const {email, password, username,tipo_perfil} = this
            var self = this
            this.$validator.validateAll()
            // create a new user from our mutation
            this.$apollo.mutate({
                mutation: CREATE_USER_MUTATION,
                variables: {
                    email,
                    password,
                    username,
                    tipo_perfil
                }
            }).then(response => {
                debugger
                const token = response.data.userSignup.token
                const userData = getUserFromToken(token)
                self.saveuserData(token, userData.id_user)
                self.$root.token= token
                self.$router.push('/profile')
            })
            .catch((err) => {
                self.error = err.message.replace('GraphQL error:', '')
                self.alert = !self.alert
            })
        },
        saveuserData (token, userId) {
            localStorage.removeItem("token")
            localStorage.removeItem("id_user")  
            localStorage.setItem('token', token)
            localStorage.setItem('id_user', userId)
        }
    },

    created () {

        this.$apollo.query({
            query: TIPO_PERFIL_QUERY
        }).then(result => {
            var cat = result.data.categorias
            for (var i = cat.length - 1; i >= 0; i--) {
                if (cat[i].nombre != 'administrador') {
                    var data = {
                        id: cat[i].id_tipo_perfil,
                        text: cat[i].nombre
                    }
                    this.items.push(data)
                }
            }
            console.log(this.items)
        })

    }
})
