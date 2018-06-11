<template>
    <div>
        <v-navigation-drawer
        clipped
        fixed
        v-model="showDrawer"
        app
        width="180"
        >
        <v-list dense>
            <v-list  v-if='!user'>
                <v-list-tile
                v-for='link in navItems'
                :key='link.title'
                :to='link.path'
                >
                <v-list-tile-action>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{link.title}}</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list v-else >
                <v-list-tile
                v-for='link in navUser'
                :key='link.title'
                :to='link.path'
                >
                <v-list-tile-action>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{link.title}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            </v-list>
        </v-list>
    </v-navigation-drawer>

        <v-toolbar app :clipped-left="clipped" color="purple" dark flat dense>
            <div v-if="getUser">
                <v-toolbar-side-icon @click.native='showDrawer = !showDrawer'></v-toolbar-side-icon>
            </div>
            <v-spacer></v-spacer>
            <v-flex xs12 sm3 md3 class="separarBusqueda">
                <v-text-field
                clearable
                rows="1"
                flat
                solo-inverted
                prepend-icon="search"
                label="Buscar"
                v-model="buscando"
                class="buscador"
                ></v-text-field>
            </v-flex>
            <v-toolbar-items class="hidden-sm-and-down">
                <div v-if='!user' class='paddingOut'>
                    <v-btn flat v-for='link in navItems' :key='link.title' :to='link.path' >
                        <v-icon left :loading="loading" :disabled="loading" @click.native="loader = 'loading'">{{link.icon}}</v-icon>
                        {{link.title}}
                    </v-btn>
                </div>
                <div  v-else class='paddingOut'>
                    <v-btn flat to='/profile'>
                        <v-avatar size="36px" left>
                            <img
                            v-if="getUser.usuario"
                            :src="getUser.foto_perfil"
                            alt=""
                            >
                            <v-icon v-else>{{ iconBlanco }}</v-icon>
                        </v-avatar>
                        <div style="padding: 10px;">
                            <strong>{{getUser.usuario}}</strong>
                        </div>
                        
                    </v-btn>
                    <v-btn flat @click='logout' class="logout">
                        <v-icon left>highlight_off</v-icon>
                        Salir
                    </v-btn>
                </div>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
