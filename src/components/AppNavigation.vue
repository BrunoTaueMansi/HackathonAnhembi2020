<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="cyan lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index" :to="item.url">
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="cyan darken-4" dark>
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <div style="position:absolute">
                    <v-img
                        src="https://cdn.discordapp.com/attachments/779706063058108436/780038236701327410/logos.png"
                        height="40px"
                        width="40px"
                    >
                    </v-img>
                </div>
                <v-toolbar-title data-cy="titleBtn" style="margin-left: 45px">{{
                    appTitle
                }}</v-toolbar-title>
            </router-link>
            <v-btn
                flat
                class="hidden-sm-and-down nav-menu"
                to="/quem-somos"
                data-cy="menuBtn"
                >Quem Somos</v-btn
            >
            <v-btn
                flat
                class="hidden-sm-and-down nav-menu"
                to="/materias"
                data-cy="menuBtn"
                >Materia</v-btn
            >
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat to="/cadastro" data-cy="signinBtn">Cadastro</v-btn>
                <v-btn
                    color="cyan lighten-3"
                    to="/login"
                    class="nav-join"
                    data-cy="joinBtn"
                    >login</v-btn
                >
            </div>
            <div v-else>
                <v-btn flat to="/materias">Matérias</v-btn>
                <v-btn outline color="white" @click="logout" data-cy="logout"
                    >Logout</v-btn
                >
            </div>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'AnotaMais',
            drawer: false,
            items: [
                { title: 'QuemSomos', url: '/quem-somos' },
                { title: 'Materias', url: '/materias' },
                { title: 'Cadastro', url: '/cadastro' },
                { title: 'Login', url: '/login' }
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
