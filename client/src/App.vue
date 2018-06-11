<template>
    <div id="app">
        <v-app>
            <navegacion></navegacion>
            <router-view></router-view>
        </v-app>
    </div>
</template>

<script>
    import Navegacion from './components/Navegacion/main.vue'
    export default {
        name: 'app',
        components: {
            Navegacion
        }
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
